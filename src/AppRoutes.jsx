import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

// --- THIS IS THE CORRECT WAY TO LAZY LOAD ---
// We replace the static imports with 'lazy()'
const HomePage = lazy(() => import('./pages/HomePage'));
const ActivityPage = lazy(() => import('./pages/ActivitiePage'));
const EventsPage = lazy(() => import('./pages/EventsPage')); // Corrected typo
const FacultiePage = lazy(() => import('./pages/FacultiePage')); // Corrected typo
const ManagementPage = lazy(() => import('./pages/ManagementPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));
const MissionPage = lazy(() => import('./pages/MissionPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'))

// --- YOUR HELPER COMPONENTS (THESE ARE PERFECT) ---
const NotFound = () => <h2 className="p-4 text-center text-xl">404: Page Not Found</h2>

const PageLoader = () => (
  <div className="p-10 text-center">
    Loading...
  </div>
)

export default function AppRoutes() {
  return (
    // Now, Suspense has a job to do!
    // It will show <PageLoader /> while the page component is being downloaded.
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/activities' element={<ActivityPage />} />
        <Route path='/events' element={<EventsPage />} /> {/* Corrected component name */}
        <Route path='/faculties' element={<FacultiePage />} /> {/* Corrected component name */}
        <Route path='/management' element={<ManagementPage />} />
        <Route path='/facilities' element={<FacilitiesPage />} />
        <Route path='/mission' element={<MissionPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/donate' element={<DonatePage />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}