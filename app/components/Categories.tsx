import Image from "next/image";

const Categories = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
             <div className="flex justify-between items-center pt-3 pb-6 space-x-4 cursor-pointer">
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image 
                        src="/cottages.png"
                        alt="category-cottages"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Cottages</span>
                </div>

                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image 
                        src="/main_house.png"
                        alt="category-big-house"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Big House</span>
                </div>

                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image 
                        src="/swimming_pool.png"
                        alt="category-swimming pool"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Swimming pool</span>
                </div>

                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image 
                        src="/bar.png"
                        alt="category-bar"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Bar</span>
                </div>

                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image 
                        src="/beach.png"
                        alt="category-sorrounding-areas"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Surrounding areas</span>
                </div>
             </div>
        </main>
    )
}

export default Categories;
    