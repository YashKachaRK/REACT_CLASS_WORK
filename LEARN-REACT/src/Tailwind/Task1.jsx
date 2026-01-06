function Task1() {
  return (
    // <div class="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
    //   <h1 class="text-xl font-bold">Logo</h1>

    //   <div class="flex gap-6">
    //     <a>Home</a>
    //     <a>About</a>
    //     <a>Contact</a>
    //   </div>
    // </div>
    // <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //   <div class="bg-white p-4 shadow">Card 1</div>
    //   <div class="bg-white p-4 shadow">Card 2</div>
    //   <div class="bg-white p-4 shadow">Card 3</div>
    //   <div class="bg-white p-4 shadow">Card 4</div>
    // </div>
<nav class="flex justify-between items-center p-4 bg-gray-800 text-white">
  <h1 class="text-xl font-bold">Logo</h1>


  <div class="hidden md:flex gap-6">
    <a>Home</a>
    <a>About</a>
    <a>Contact</a>
  </div>


  <button class="block md:hidden">
    ☰
  </button>
</nav>

  );
}

export default Task1;
