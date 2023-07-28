import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

export interface SelectValueProps {
  value?: number
  setValue: (value: number) => void
}

const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

export function SelectValue({ value, setValue }: SelectValueProps) {
  const handleChange = (e: SelectChangeEvent) => {
    setValue(Number(e.target.value))
  }

  return (
    <div className='mb-10'>
      <FormControl variant='standard' className='w-full'>
        <InputLabel className='mb-2 text-prim font-medium'>Story Points</InputLabel>
        <Select
          value={String(value)}
          onChange={handleChange}
          label='Story Points'
        >
          {fibonacci.map((value) => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
