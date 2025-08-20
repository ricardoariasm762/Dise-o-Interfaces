
export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
      <main className="bg-white h-140 w-110 rounded p-7">
        <h1 className="font-bold text-blue-200 flex justify-between">Tue Feb 18 2025<h1>9:31:25 p.m.</h1></h1>
        <h2 className="text-2xl font-bold  text-blue-600">List Tailwind</h2>
        <div className="grid grid-cols-7 text-center text-gray-600">
          <span>s</span>
          <span>m</span>
          <span>t</span>
          <span>w</span>
          <span>t</span>
          <span>f</span>
          <span>s</span>

          <span className="font-semibold">24</span>
          <span className="font-semibold">25</span>
          <span className="font-semibold">26</span>
          <span className="font-semibold">27</span>
          <span className="font-semibold">28</span>
          <span className="font-semibold">29</span>
          <span className="font-semibold">30</span>
        </div>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center bg-green-600 text-white rounded-full text-sm">✓</span>
            <span className="font-semibold line-through text-gray-500">take-out-the-trash</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-500 flex items-center justify-center">9:00 AM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center bg-green-600 text-white rounded-full text-sm">✓</span>
            <span className="font-semibold line-through text-gray-500">do-homework</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-500 flex items-center justify-center">12:00 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-500">go to grocery store</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-500 flex items-center justify-center">1:00 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-500">run 5 kilometers</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-500 flex items-center justify-center">4:20 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2 mb-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-500">load the dishwasher</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-500 flex items-center justify-center">9:00 PM</span>
        </span>

        <span className="grid grid-cols-4 gap-2">
          <span className="col-span-3 bg-blue-100 rounded p-2 flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400"></span>
            <span className="font-semibold text-gray-500">Take out the trash</span>
          </span>
          <span className="col-span-1 bg-blue-100 rounded p-2 font-bold text-gray-500 flex items-center justify-center">9:00 AM</span>
        </span>


      </main>
    </div>
  );
}
