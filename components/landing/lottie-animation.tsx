'use client'
import Lottie from 'lottie-react'
import animationData from '@/public/animations/campus-bond-lottie.json'

export default function LottieAnimation() {
    return (
        <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 200, height: 200 }}
        />
    )
}