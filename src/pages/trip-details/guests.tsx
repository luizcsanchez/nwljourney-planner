import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-zinc-50 ">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Jessica White</span>
            <span className="block text-sm truncate text-zinc-400">jessica.white44@yahoo.com</span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
            <span className="block text-sm truncate text-zinc-400">lacy.stiedemann@gmail.com</span>
          </div>
          <CircleCheck className="size-5 text-lime-300 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 w-full justify-center h-11 text-zinc-200 rounded-lg px-5 flex items-center gap-2 hover:bg-zinc-700">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  )
}
