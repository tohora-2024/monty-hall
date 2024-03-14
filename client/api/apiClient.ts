import { useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

export async function getMessages() {
  const res = await request.get('/api/v1/messages')
  return res.body
}
