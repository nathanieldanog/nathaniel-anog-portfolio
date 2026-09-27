export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-6 text-foreground">
      <div className="flex items-center font-sans">
        <h1 className="mr-5 border-r border-border pr-5 text-2xl font-medium leading-10">
          404
        </h1>
        <p className="text-sm font-normal leading-7">
          This page could not be found.
        </p>
      </div>
    </main>
  );
}
