import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

type SignInFormData ={
  email?: string,
  password?: string,
}

const SignIn: NextPage = () => {
  const {register, handleSubmit, formState} = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }


  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form" 
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        flexDir="column"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
       <Stack spacing={4}>
        <Input 
          type="email" 
          label="E-mail"
          {...register("email")}
        />
        <Input 
          type="password" 
          label="Senha"
          {...register("password")}
        />
        </Stack>

        <Button 
          type="submit" 
          mt="6" colorScheme="pink" 
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
      

    </Flex>
  )
}

export default SignIn
