interface BrowserWindowProps {
  children: React.ReactNode;
}

export function BrowserWindow({ children }: BrowserWindowProps) {
  return (
    <div
      className="max-w-4xl w-full ring-1 ring-grey-700/20 rounded-xl"
      style={
        {
          "--tw-shadow":
            "0px 22px 48px rgba(0, 0, 0, 0.03), 0px 8.03036px 17.5208px rgba(0, 0, 0, 0.0206994), 0px 3.89859px 8.50602px rgba(0, 0, 0, 0.0166887), 0px 1.91116px 4.16981px rgba(0, 0, 0, 0.0133113), 0px 0.755676px 1.64875px rgba(0, 0, 0, 0.00930055)",
        } as any
      }
    >
      <div className="grid grid-flow-col justify-start gap-1.5 p-4 border-b border-grey-700/10">
        <div className="rounded-full h-3 w-3 bg-red-500" />
        <div className="rounded-full h-3 w-3 bg-yellow-300" />
        <div className="rounded-full h-3 w-3 bg-green-300" />
      </div>
      {children}
    </div>
  );
}
