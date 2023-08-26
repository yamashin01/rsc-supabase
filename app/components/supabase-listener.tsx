'use client'

import useStore from '@/store'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SupabaseListener({
  accessToken,
}: {
  accessToken?: string
}) {
  const router = useRouter()
  const { updateLoginUser } = useStore()
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        updateLoginUser({
          id: data.session?.user.id,
          email: data.session?.user.email!,
        })
      }
    }
    getUserInfo()
    supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({ id: session?.user.id, email: session?.user.email! })
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken, router, updateLoginUser])
  return null
}
