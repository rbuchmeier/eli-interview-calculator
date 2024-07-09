const PageContent = ({children}) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f6f5f1] to-[#c2c8f9]">
        <div className="border-1 border-neutral-300 w-[700px] rounded-xl bg-white p-8 my-8">
            {children}
            </div>
      </main>
    )
}

export default PageContent