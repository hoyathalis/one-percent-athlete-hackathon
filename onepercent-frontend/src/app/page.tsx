// src/app/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/userAuth';
import LoginForm from '@/components/auth/LoginForm';

export default function Home() {
  const router = useRouter();
  const { loading, user } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard'); // Changed from '/chat' to '/dashboard'
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <LoginForm />
    </main>
  );
}