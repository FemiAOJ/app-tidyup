
export const Stats = () => {
  const stats = [
    { number: "50K+", label: "Technicians" },
    { number: "1M+", label: "Jobs Completed" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="py-16 bg-[#0EA5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-[#D3E4FD]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
