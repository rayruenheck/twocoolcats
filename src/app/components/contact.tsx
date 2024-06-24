import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { sendContactForm } from '../lib/api'

const initValues = { name: '', email: "", subject: "", message: "" }
const initState = { values: initValues, isLoading: false, error: '' }

export default function Contact() {
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const { values, isLoading, error } = state
  const toast = useToast()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = event
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))
  }

  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = event
    setTouched((prev) => ({
      ...prev,
      [target.name]: true
    }))
  }

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: ''
    }))

    try {
      const response = await sendContactForm(values)
      console.log('Response:', response)  // Log the response

      toast({
        title: 'Message sent.',
        description: "We've received your message.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setState(initState)  // Reset form values and loading state
      setTouched({})  // Reset touched state
    } catch (error) {
      console.error('Error:', error)  // Log the error

      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Failed to send message. Please try again later.'
      }))
    }
  }

  return (
    <Container display="flex" flexDirection="column" alignItems="center" justifyContent="center" maxW="450px" mt={12}>
      <Heading mb={5}>Contact</Heading>
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type='text'
          name='name'
          errorBorderColor='red.300'
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.email && !values.email} mt={4} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.subject && !values.subject} mt={4} mb={5}>
        <FormLabel>Subject</FormLabel>
        <Input
          type='text'
          name='subject'
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.message && !values.message} mt={4} mb={5}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name='message'
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        mb={12}
        variant="outline"
        colorScheme='blue'
        isLoading={isLoading}
        disabled={!values.email || !values.message || !values.name || !values.subject}
        onClick={onSubmit}
      >
        Submit
      </Button>
      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
      )}
    </Container>
  )
}
