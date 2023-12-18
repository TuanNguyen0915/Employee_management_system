export const calculateSalary = data => {
  let res = 0
  data.forEach(e => {
    res += e.salary
  })
  return res
}