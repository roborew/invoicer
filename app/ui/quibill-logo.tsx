import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { jakarta } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div className={`${jakarta.className} flex items-center gap-2`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
        <GlobeAltIcon className="h-5 w-5" />
      </span>

      <span className="text-xl font-bold tracking-tight text-sand-900">
        Quibill
      </span>
    </div>
  );
}
