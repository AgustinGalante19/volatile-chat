import client from '@/app/utils/client'
import { NextResponse } from 'next/server'
import ShortUniqueId from 'short-unique-id'

export async function POST() {
  try {
    const tag = new ShortUniqueId({ length: 10 }).rnd()
    await client.user.create({
      data: {
        tag,
      },
    })
    return NextResponse.json({ data: tag })
  } catch (err) {
    return NextResponse.json({ data: null })
  }
}
