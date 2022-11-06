import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

import { Controls } from "../../components/controls/Controls";

import { useForm, Form } from "../../components/useForm";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props

    //*********OnSubmit Validation */
//   const validate =() => {
//     let temp = {}
//     // window.alert(values.fullName);
//     // window.alert(values.email);
//     // window.alert(values.mobile);
//     // window.alert(values.departmentId);
//     temp.fullName = values.fullName?"":"This field is required."
//     temp.email = (/$^|.+@.+..+/).test(values.email)?"":"Email is not valid."
//     temp.mobile = values.mobile.length>9?"":"Minimum 10 numbers required."
//     temp.departmentId = values.departmentId.length!=0?"":"This field is required."

//     setErrors({
//         ...temp
//     })
// // window.alert(temp);
//     return Object.values(temp).every(x => x == "")
//   } 

// ********* Single component wise validation.
const validate =(fieldValues = values) => {
    let temp = {...errors}
    if ('fullName' in fieldValues)
        // take little bit time to update values (React asynchrous), to prevent that we use fieldValues
        // temp.fullName = values.fullName?"":"This field is required."
        temp.fullName = fieldValues.fullName?"":"This field is required."
    if ('email' in fieldValues)    
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length>9?"":"Minimum 10 numbers required."
    if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length!=0?"":"This field is required."

    setErrors({
        ...temp
    })
// window.alert(temp);
    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
  }
  const { values, setValues,errors,
    setErrors, handleInputChange,resetForm } = useForm(initialFValues,true,validate);

  const  handleSubmit = e =>{
    e.preventDefault()
    if(validate()){
        // window.alert('testing...');
        // employeeService.insertEmployee(values);
        // resetForm();
        addOrEdit(values, resetForm);
    }else{
        // window.alert('testing else...');
    }
    
  }

  useEffect(() => {
    if (recordForEdit != null)
        setValues({
            ...recordForEdit
        })
}, [recordForEdit])

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />

            {/* <TextField
              variant="outlined"
              label="email"
              name="email"
              onChange={handleInputChange}
              value={values.email}
            /> */}
            <Controls.Input
              label="Email"
              name="email"
              onChange={handleInputChange}
              value={values.email}
              error={errors.email}
            />
            <Controls.Input
              label="Mobile"
              name="mobile"
              onChange={handleInputChange}
              value={values.mobile}
              error={errors.mobile}
            />
            <Controls.Input
              label="City"
              name="city"
              onChange={handleInputChange}
              value={values.city}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />

            <Controls.Select
              name="departmentId"
              label="Department"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentId}
            />

            <Controls.DatePicker
              name="hireDate"
              label="Hire Date"
              value={values.hireDate}
              onChange={handleInputChange}
            />

            <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            />
            {/* <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup row
                name="gender"
                value={values.gender}
                onChange={handleInputChange} >
                    <FormControlLabel value='male' control={<Radio />} label='Male' />
                    <FormControlLabel value='female' control={<Radio />} label='Female' />
                    <FormControlLabel value='other' control={<Radio />} label='Other' />
                </RadioGroup>
            </FormControl> */}

            <div>
              <Controls.Button type="submit" text="Submit" />
              <Controls.Button
                text="Reset"
                color="default"
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
