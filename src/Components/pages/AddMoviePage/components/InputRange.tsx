import { ChangeEvent, ReactElement } from 'react'

interface IInputRangeProps {
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}
const InputRange = (props: IInputRangeProps): ReactElement => {
  const { value, min, max, onChange } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value)
    onChange(value)
  }

  return (
    <label>
      {value}
      <input
        type="range"
        onChange={handleChange}
        min={min}
        max={max}
        value={value}
      />
    </label>
  )
}

export default InputRange
