


export const handleChange = (data) => {
 console.log(data)
 return {
  type: 'CHANGE', data: data
 }
}


export const handleSubmit = (data) => {
 console.log(data)
  return {
    type: 'SUBMIT'
  }
}