
export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <section
        className="max-w-[500px] mx-auto p-6"
      >
        {children}
      </section>
    
  );
}
