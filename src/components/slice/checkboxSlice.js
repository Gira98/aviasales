import { createSlice } from "@reduxjs/toolkit";

const checkboxSlice = createSlice({
  name: 'checkboxes',
  initialState: {
    checkboxes: [
      { name: 'all', checked: true },
      { name: 'without transfers', checked: true },
      { name: 'one transfer', checked: true },
      { name: 'two transfers', checked: true },
      { name: 'three transfers', checked: true },
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
