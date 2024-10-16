const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container py-5">
      <div className="min-h-[90vh] flex items-center justify-center">
        <div className="h-full w-full md:w-8/12 md:max-w-md md:border md:rounded-md py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;