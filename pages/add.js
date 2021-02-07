import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { add_bot_url } from '../database/constants.json'

export default function Add() {
  const router = useRouter()
  useEffect(() => router.push(add_bot_url))
  return (
    <p>REDIRECIONANDO...</p>
  )
}

