interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* 左側のブランディングエリア */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#2D7DD2] items-center justify-center">
        <div className="text-center text-white">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2">GOJO</h1>
            <p className="text-xl">solution</p>
          </div>
          <p className="text-lg">GOJOの業務管理画面</p>
        </div>
      </div>

      {/* 右側のコンテンツエリア */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};
