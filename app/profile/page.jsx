'use client';

import {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const page = () => {
  return (
    <Profile/>
  )
}

export default page
