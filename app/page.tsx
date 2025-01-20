import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Quizon</h1>
      <p className="text-gray-700">Start by registering or logging in:</p>
      <div className="flex space-x-4">
        <Link href="/auth/register" className="px-4 py-2 bg-blue-500 text-white rounded">
          Register
        </Link>
        <Link href="/auth/login" className="px-4 py-2 bg-green-500 text-white rounded">
          Login
        </Link>
      </div>
    </main>
  );
}
