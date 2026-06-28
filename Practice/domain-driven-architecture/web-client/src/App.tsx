import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Loader2, CheckCircle2, AlertCircle, UserPlus } from 'lucide-react';
import { api } from './api';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwordPlain, setPasswordPlain] = useState('');

  const registerMutation = useMutation({
    mutationFn: async () => {
      const res = await api.api.users.register.$post({
        json: { username, email, passwordPlain }
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Registration failed');
      }
      return res.json();
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
        
        {/* Header Icon & Branding */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mb-3">
            <UserPlus size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Create Account</h2>
          <p className="text-sm text-slate-500 mt-1">Join our domain-driven workspace</p>
        </div>
        
        {/* Form Layout */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Username</label>
            <input 
              type="text" 
              placeholder="thomas_auer" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors placeholder:text-slate-400 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Email Address</label>
            <input 
              type="email" 
              placeholder="thomas@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors placeholder:text-slate-400 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={passwordPlain} 
              onChange={(e) => setPasswordPlain(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors placeholder:text-slate-400 text-sm"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={registerMutation.isPending}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-indigo-600/10 cursor-pointer disabled:cursor-not-allowed"
          >
            {registerMutation.isPending ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              'Register Account'
            )}
          </button>
        </form>

        {/* Feedback Messages */}
        {registerMutation.isSuccess && (
          <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl flex items-start gap-2.5 text-sm transition-all">
            <CheckCircle2 className="shrink-0 mt-0.5" size={16} />
            <span>Account provisioned successfully! You can now log in.</span>
          </div>
        )}

        {registerMutation.isError && (
          <div className="mt-4 p-3.5 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl flex items-start gap-2.5 text-sm transition-all">
            <AlertCircle className="shrink-0 mt-0.5" size={16} />
            <span>{registerMutation.error.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}