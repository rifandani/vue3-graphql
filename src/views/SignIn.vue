<template>
  <div
    class="relative flex items-center justify-center min-h-screen px-4 py-8 bg-no-repeat bg-cover bg-gray-50 sm:px-6 lg:px-8"
    style="background-image: url(https://i2.wp.com/quipperhome.wpcomstaging.com/wp-content/uploads/2017/04/0921f-front-uny-juga-min.jpg);"
  >
    <!-- backdrop -->
    <div class="absolute inset-0 z-0 bg-black opacity-60"></div>

    <div class="z-10 w-full max-w-md p-10 space-y-8 bg-white rounded">
      <!-- logo -->
      <div class="flex justify-center w-full">
        <img
          class="w-20 rounded-full"
          src="/images/logo-secondary.png"
          alt="besmart logo"
        />
      </div>

      <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold text-gray-900">
          Selamat Datang!
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Silahkan masuk dengan akun anda
        </p>
      </div>

      <!-- social media login -->
      <div class="flex flex-row items-center justify-center space-x-3">
        <span
          class="inline-flex items-center justify-center text-lg font-bold text-white transition duration-300 ease-in bg-blue-900 rounded-full cursor-pointer w-11 h-11 hover:shadow-lg"
          ><img
            class="w-4 h-4"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
        /></span>
        <span
          class="inline-flex items-center justify-center text-lg font-bold text-white transition duration-300 ease-in bg-blue-500 rounded-full cursor-pointer w-11 h-11 hover:shadow-lg"
          ><img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            class="w-4 h-4"
        /></span>
      </div>

      <div class="flex items-center justify-center space-x-2">
        <span class="w-16 h-px bg-gray-300"></span>
        <span class="font-normal text-gray-500">ATAU</span>
        <span class="w-16 h-px bg-gray-300"></span>
      </div>

      <!-- form -->
      <form class="mt-8 space-y-6" action="#" method="POST">
        <!-- email -->
        <div class="relative">
          <label class="text-sm font-bold tracking-wide text-gray-700"
            >Email</label
          >
          <input class="mt-2" type="text" placeholder="mail@gmail.com" />
        </div>

        <!-- password -->
        <div class="content-center mt-8">
          <label class="text-sm font-bold tracking-wide text-gray-700">
            Password
          </label>
          <input
            class="mt-2"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <!-- remember -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="w-4 h-4 rounded"
            />
            <label for="remember_me" class="block ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <!-- forgot password -->
          <div class="">
            <router-link class="text-link" to="/forgot-password"
              >Lupa password?</router-link
            >
          </div>
        </div>

        <!-- sig in button -->
        <button type="submit" class="button-primary-block">
          Masuk
        </button>

        <!-- sign up link -->
        <p
          class="flex flex-col items-center justify-center mt-10 text-center text-gray-500 text-md"
        >
          <span>Tidak punya akun?</span>
          <router-link class="text-link" to="/signup">Daftar</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
};
</script>
