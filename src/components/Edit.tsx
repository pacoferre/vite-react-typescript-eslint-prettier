import { Button, Paper, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'

type Person = {
  name: string
  surName: string
}

const defaultValues: Person = {
  name: '',
  surName: '',
}

const Edit = () => {
  const schema = useMemo(
    () =>
      yup.object<Person>().shape({
        name: yup.string().required(),
        surName: yup.string().required(),
      }),
    []
  )
  const { handleSubmit, reset, control } = useForm<Person>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data: Person) => {
    console.log(data)
    reset()
  }

  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: '10px 300px',
      }}
    >
      <Typography variant='h4'>Form Demo</Typography>

      <Controller
        name='name'
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            helperText={error ? error.message : null}
            size='small'
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label='Name'
            variant='outlined'
          />
        )}
      />

      <Controller
        name='surName'
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            helperText={error ? error.message : null}
            size='small'
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label='Surname'
            variant='outlined'
          />
        )}
      />

      <Button
        onClick={handleSubmit(onSubmit)}
        variant={'contained'}
      >
        Submit
      </Button>
      <Button
        onClick={() => reset()}
        variant={'outlined'}
      >
        Reset
      </Button>
    </Paper>
  )
}

export default Edit
