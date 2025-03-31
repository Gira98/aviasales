import { createSlice } from "@reduxjs/toolkit";

const checkboxSlice = createSlice({
  name: 'checkboxes',
  initialState: {
    checkboxes: [
      { name: 'all', checked: false },
      { name: 'without transfers', checked: false },
      { name: 'one transfer', checked: false },
      { name: 'two transfers', checked: false },
      { name: 'three transfers', checked: false },
    ],
  },
  reducers: {
    toggledCheckbox(state, action) {
      const { checkboxes } = state
      const targetCheckbox = checkboxes.find(el => el.name === action.payload.name)
      targetCheckbox.checked = !targetCheckbox.checked

      if (targetCheckbox === checkboxes[0]) {
        if (targetCheckbox.checked === true) {
          checkboxes.forEach(el => {
            el.checked = true
          })
        } else {
          checkboxes.forEach(el => {
            el.checked = false
          })
        }
      } else if (checkboxes[0].checked === true) {
          checkboxes[0].checked = false
      } else {
        if (checkboxes[1].checked === true && checkboxes[2].checked === true && checkboxes[3].checked === true && checkboxes[4].checked === true) {
          checkboxes[0].checked = true
        }
      }
    },

  }
})

export const selectCheckboxes = (state) => state.checkbox.checkboxes

export const { toggledCheckbox } = checkboxSlice.actions

export default checkboxSlice.reducer
