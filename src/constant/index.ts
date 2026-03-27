export const navItems = [
  {
    label: 'Dashboard',
    active: true,
    icon: lucide
  },
  {
    label: 'Inbox',
    active: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Lesson',
    active: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="9" x2="21" y2="9" />
        <line x1="15" y1="15" x2="21" y2="15" />
      </svg>
    ),
  },
  {
    label: 'Task',
    active: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <polyline points="9,11 12,14 22,4" />
        <line x1="3" y1="8" x2="21" y2="8" />
      </svg>
    ),
  },
  {
    label: 'Group',
    active: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
]

const friends = [
  { name: 'Bagas Mahpie', role: 'Friend', color: 'bg-orange-300' },
  { name: 'Sir Dandy', role: 'Old Friend', color: 'bg-purple-300' },
  { name: 'Jhon Tosan', role: 'Friend', color: 'bg-blue-300' },
]