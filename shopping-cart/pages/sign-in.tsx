import React from 'react'
import { Layout } from '@/components/layout'
import { signInWithGooglePopup } from '@/utils/firebase/firebase.utils'
import { createDocumentfromUserAuth } from '@/utils/firebase/firebase.utils'
const SignIn = () => {

  const logGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    createDocumentfromUserAuth(user);
  }
  return (
    <Layout>

      <button onClick={logGoogle}>sign in with google </button>
    </Layout>
  )
}

export default SignIn

