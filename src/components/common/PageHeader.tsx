interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-black py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        {description && (
          <p className="mt-2 text-sm text-gray-300">{description}</p>
        )}
      </div>
    </div>
  );
}
