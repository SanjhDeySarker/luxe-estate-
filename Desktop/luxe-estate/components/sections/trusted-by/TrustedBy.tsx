export const TrustedBy = () => {
    const brands = ['Sotheby\'s', 'Christie\'s', 'Knight Frank', 'Savills', 'Engel & Völkers']

    return (
        <section className="py-12 border-y border-border bg-white/30">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-16">
                {brands.map((brand) => (
                    <span key={brand} className="text-secondary-text text-xs tracking-[0.15em] uppercase font-medium opacity-60">
                        {brand}
                    </span>
                ))}
            </div>
        </section>
    )
}