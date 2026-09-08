import { generateYAxis } from "@/app/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Revenue } from "@/app/lib/definitions";
import { fetchRevenue } from "@/app/lib/data";

export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return (
      <div className="w-full rounded-2xl border border-sand-200 bg-white p-5 md:col-span-4">
        <h2 className="text-lg font-bold tracking-tight text-sand-900">
          Recent revenue
        </h2>
        <p className="mt-6 text-sm text-sand-800/60">No data available.</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-sand-200 bg-white p-5 md:col-span-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-sand-900">
            Recent revenue
          </h2>
          <p className="mt-1 text-sm text-sand-800/60">
            Revenue performance over the last 12 months.
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <CalendarIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-sand-50 p-4">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-lg border border-sand-200 bg-white p-4 sm:grid-cols-13 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-sand-800/50 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-brand-500 transition-colors hover:bg-brand-600"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              />

              <p className="-rotate-90 text-sm text-sand-800/50 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center pt-4 text-sm text-sand-800/60">
          <CalendarIcon className="h-5 w-5" />
          <span className="ml-2">Last 12 months</span>
        </div>
      </div>
    </div>
  );
}
