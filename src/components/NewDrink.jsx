import React from "react";

export default function NewDrink() {
  return (
    <div className='container align-self-center'>
      <div className='fs-3 text-uppercase p-4'>
        ideally here is where the user will have the options to save a cocktail
        not listed or otherwise customized to their liking
      </div>
      <br />
      <form
        action='submit'
        className='text-uppercase p-3 w-50 border border-primary '>
        <input
          type='text'
          className='form-control w-50 text-capitalize'
          placeholder='drink name'
        />
        <label htmlFor=''></label>

        <input
          type='text'
          className='form-control w-50 text-capitalize'
          placeholder='Alcohol'
        />
        <label htmlFor=''></label>

        <input
          type='text'
          className='form-control w-50 text-capitalize'
          placeholder='Mixer #1'
        />
        <label htmlFor=''></label>

        <input
          type='text'
          className='form-control w-50 text-capitalize'
          placeholder='Mixer #2'
        />
        <label htmlFor=''></label>

        <input
          type='text'
          className='form-control w-50 text-capitalize'
          placeholder='Mixer #3'
        />
        <label htmlFor=''></label>
        <button className='btn btn-primary btn-lg mt-4' action='submit'>
          submit
        </button>
      </form>
      <br />
    </div>
  );
}

//ideally when a bartender has an unique cocktail they will be able to add it here
//and potentially submit to database for other users to access
