interface TableWrapperProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function TableWrapper({ children, sidebar }: TableWrapperProps) {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
      {sidebar && (
        <aside className="lg:col-span-3">
          {sidebar}
        </aside>
      )}
      <main className={`${sidebar ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
        {children}
      </main>
    </div>
  );
}
