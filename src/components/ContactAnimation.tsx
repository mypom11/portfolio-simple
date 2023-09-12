import React from 'react'
import Lottie from 'react-lottie-player'
import LottieAnimation from '@/assets/animation-contact.json'

const ContactAnimation = () => {
  return <Lottie animationData={LottieAnimation} loop play></Lottie>
}

export default ContactAnimation
