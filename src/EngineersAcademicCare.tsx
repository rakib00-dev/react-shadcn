import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import {
  // Phone,
  BookOpenCheck,
  // Users,
  // FileText,
  // CalendarDays,
  // Search,
} from 'lucide-react';

export default function EngineersAcademicCare() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          ইঞ্জিনিয়ার্স একাডেমিক কেয়ার
        </h1>
        <p className="text-blue-600 text-lg">
          এসএসসি ও এইচএসসি শিক্ষার্থীদের জন্য এক অনন্য এডুকেশনসাইট
        </p>
      </header>

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
              <BookOpenCheck className="w-5 h-5 mr-2" />
              নোটস ও সাজেশন
            </h2>
            <p className="text-gray-700">
              প্রতিটি বিষয়ের জন্য মানসম্মত নোটস ও সাজেশন, সম্পূর্ণ বিনামূল্যে।
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
