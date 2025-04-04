import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectCheckboxes } from "./checkboxSlice";
import { selectFilter } from "./filterSlice";
import { createSelector } from "@reduxjs/toolkit";

export const fetchId = createAsyncThunk("server/fetchId", async function () {
  const url = `https://aviasales-test-api.kata.academy`;
  const response = await fetch(`${url}/search`);

  if (!response.ok) {
    throw new Error(
      `Error while fetching searchId: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.searchId;
});

export const fetchBatch = createAsyncThunk(
  "server/fetchBatch",
  async function (id) {
    const url = `https://aviasales-test-api.kata.academy`;

    const ticketResponse = await fetch(`${url}/tickets?searchId=${id}`);

    if (!ticketResponse.ok) {
      throw new Error(
        `Error while fetching batch of tickets: ${ticketResponse.status} ${ticketResponse.statusText}`
      );
    }

    const batch = await ticketResponse.json();

    return batch;
  }
);

export const fetchData = createAsyncThunk(
  "server/fetchData",
  async function (_, { dispatch }) {
    let stop = false;

    let errorCount = 0;

    try {
      const searchId = await dispatch(fetchId()).unwrap();

      if (!searchId) {
        throw new Error("Не удалось получить searchId");
      }

      while (!stop) {
        try {
          const batch = await dispatch(fetchBatch(searchId)).unwrap();

          dispatch(addTickets(batch.tickets));

          stop = batch.stop;
        } catch (err) {
          console.warn(err.message);
          errorCount ++

          if (errorCount >= 5) {
            stop = true 
            dispatch(showErrorMessage())
          }
        }
      }

      return searchId;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const serverSlice = createSlice({
  name: "server",
  initialState: {
    tickets: [],
    status: null,
    error: null,
    showError: false,
    ticketsAmount: 5,
    searchId: null,
  },
  reducers: {
    showMore(state) {
      state.ticketsAmount = state.ticketsAmount + 5;
    },
    addTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload];
    },
    showErrorMessage(state) {
      state.showError = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchId.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
      .addCase(fetchId.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchBatch.rejected, (state, action) => {
        // state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state) => {
        state.status = "resolved";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

const selectTickets = state => state.tickets.tickets;
const selectTicketsAmount = state => state.tickets.ticketsAmount;

export const selectFilteredTickets = createSelector(
  [selectTickets, selectCheckboxes, selectFilter, selectTicketsAmount],
  (tickets, checkboxes, filter, ticketsAmount) => {
    let res = [];
    let filteredByCheckboxes = tickets;

    if (!checkboxes.find((el) => el.name === "all").checked) {
      const selectedCheckboxes = [];
      if (checkboxes.find((el) => el.name === "without transfers")?.checked) {
        selectedCheckboxes.push(0);
      }
      if (checkboxes.find((el) => el.name === "one transfer")?.checked) {
        selectedCheckboxes.push(1);
      }
      if (checkboxes.find((el) => el.name === "two transfers")?.checked) {
        selectedCheckboxes.push(2);
      }
      if (checkboxes.find((el) => el.name === "three transfers")?.checked) {
        selectedCheckboxes.push(3);
      }

      filteredByCheckboxes = tickets.filter((ticket) =>
        ticket.segments.some((segment) =>
          selectedCheckboxes.includes(segment.stops.length)
        )
      );
    }

    if (filter === "cheapest") {
      res = filteredByCheckboxes.slice().sort((a, b) => a.price - b.price);
    } else if (filter === "fastest") {
      res = filteredByCheckboxes.slice().sort((a, b) => {
        return (
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
        );
      });
    } else if (filter === "optimal") {
      res = filteredByCheckboxes.slice().sort((a, b) => {
        const aTime = a.segments[0].duration + a.segments[1].duration;
        const bTime = b.segments[0].duration + b.segments[1].duration;

        const aOptimal = a.price + aTime * 5;
        const bOptimal = b.price + bTime * 5;

        return aOptimal - bOptimal;
      });
    }
    return res.slice(0, ticketsAmount);
  }
)

export const { showMore, addTickets, showErrorMessage } = serverSlice.actions;

export default serverSlice.reducer;
