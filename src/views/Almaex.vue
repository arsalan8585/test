<template>
  <div
    class="absolute bg-opacity-50 bg-gray-700 z-40"
    :class="showdropdown1 ? 'inset-0 ' : ''"
  >
    <div
      class="sidebar fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto bg-white dark:bg-slate-900 shadow-2xl transition-all duration-1000"
      :class="showdropdown1 ? '!right-0' : 'right-[-500px]'"
    >
      <div
        class="flex justify-end me-2 mt-4 cursor-pointer"
        @click="toggledrop1"
      >
        <svg
          class="w-6 h-6 stroke-current dark:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="mt-4">
        <!-- col 1 -->
        <div>
          <div
            class="flex p-3 text-white bg-emerald-500 rounded-xl space-s-2 items-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M3 9.84694C3 8.99003 3.36644 8.17402 4.00691 7.60471L9.34255 2.86193C10.8581 1.51477 13.1419 1.51478 14.6575 2.86193L19.9931 7.60471C20.6336 8.17402 21 8.99003 21 9.84694V17.9997C21 20.2089 19.2091 21.9997 17 21.9997H7C4.79086 21.9997 3 20.2089 3 17.9997V9.84694Z"
                fill="white"
              />
              <path
                d="M10 18H14"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <p class="">پیشخوان</p>
          </div>
        </div>
        <!-- end col1-->
        <!-- col2 -->
        <div>
          <div class="flex p-3 dark:text-white rounded-xl space-s-2 items-center">
            <svg
              class="stroke-black dark:stroke-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="10"
                height="8"
                rx="2"
                stroke-width="1.5"
              />
              <rect
                x="12"
                y="14"
                width="10"
                height="8"
                rx="2"
                stroke-width="1.5"
              />
              <path
                d="M20.4142 4L21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711L20.4142 8M16 6L21.4142 6"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3.58579 16L2.29289 17.2929C1.90237 17.6834 1.90237 18.3166 2.29289 18.7071L3.58579 20M8 18L2.58579 18"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <p class="">خرید و فروش</p>
          </div>
        </div>
        <!-- end col2-->
        <!-- col3 -->
        <div>
          <div
            class="flex p-3 dark:text-white rounded-xl justify-between items-center"
            @click="toggledrop"
          >
            <div class="flex space-s-2 items-center dark:stroke-slate-100">
              <svg
                class="stroke-black dark:stroke-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6Z"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6C22 3.79086 20.2091 2 18 2H12C9.79086 2 8 3.79086 8 6V6H22V6Z"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12L2 16L6 16C7.10457 16 8 15.1046 8 14V14C8 12.8954 7.10457 12 6 12L2 12Z"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="">کیف پول</p>
            </div>
            <div class="flex">
              <!-- icon -->
              <div class="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="#CED6E0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- end icon-->
            </div>
          </div>
          <div
            v-show="showdropdown"
            role="none"
            class="bg-[#F3F5F8] rounded-lg p-4 mt-4 dark:bg-slate-800 dark:text-white"
          >
            <a
              href="inventories"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              >موجودی ها</a
            >
            <a
              href="variz"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >واریز</a
            >
            <a
              href="bardasht"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >برداشت</a
            >
            <a
              href="listkharid"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >لیست خرید ها</a
            >
            <a
              href="listforosh"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >لیست فروش ها</a
            >
            <a
              href="varizobardasht"
              class="block px-4 py-2 text-sm border-r-2"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >واریز و برداشت ها</a
            >
            <a
              href="mobadelat"
              class="block px-4 py-2 text-sm border-r-2"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >مبادلات</a
            >
          </div>
        </div>
        <!-- end col3-->

        <!-- col 4 -->
        <div>
          <div
            class="flex p-3 dark:text-white rounded-xl justify-between items-center"
            @click="togglesidebar"
          >
            <div class="flex space-s-2 items-center">
              <svg
                class="dark:fill-slate-50"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.301 18.9281L18.9215 18.5607C20.2077 17.799 21 16.3914 21 14.8681V9.13192C21 7.6086 20.2077 6.20099 18.9215 5.43932L14.0785 2.57125C12.7923 1.80958 11.2077 1.80958 9.92154 2.57125L5.07846 5.43932C3.7923 6.20099 3 7.6086 3 9.13192V14.8681C3 16.3914 3.7923 17.799 5.07846 18.5607L5.69896 18.9281M18.301 18.9281L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.69896 18.9281M18.301 18.9281C17.0431 16.6982 14.6924 15.1979 12 15.1979C9.30762 15.1979 6.95686 16.6982 5.69896 18.9281"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <circle
                  cx="3"
                  cy="3"
                  r="3"
                  transform="matrix(1 0 0 -1 9 12)"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="">حساب کاربری</p>
            </div>
            <div class="flex">
              <!-- icon -->
              <div class="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="#CED6E0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- end icon-->
            </div>
          </div>
          <div
            v-show="showside"
            role="none"
            class="bg-[#F3F5F8] rounded-lg p-4 text-gray-700 dark:bg-slate-800 dark:text-white"
          >
            <a
              href="account"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              >پروفایل کاربری</a
            >
            <a
              href="hesab"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >حساب بانکی</a
            >

            <a
              href="device"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >دستگاه های فعال</a
            >

            <a
              href="ticket"
              class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >تیکت پشتیبانی</a
            >
          </div>
        </div>
      </div>

      <div class="p-4 absolute bottom-0 w-full">
              <div class="bg-gray-100 p-3 rounded-xl dark:bg-slate-800">
                <div class="flex justify-between">
                  <p>انتخاب رنگ</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_833_4465)">
                      <path
                        d="M12.5002 7.50033C12.5002 6.11961 11.3809 5.00033 10.0002 5.00033C8.61945 5.00033 7.50016 6.11961 7.50016 7.50033C7.50016 8.59447 8.20305 9.52445 9.18192 9.86335C9.61683 10.0139 10.0002 10.3734 10.0002 10.8337V11.667M1.66683 10.0003C1.66683 14.6027 5.39779 18.3337 10.0002 18.3337C14.6025 18.3337 18.3335 14.6027 18.3335 10.0003C18.3335 5.39795 14.6025 1.66699 10.0002 1.66699C5.39779 1.66699 1.66683 5.39795 1.66683 10.0003Z"
                        stroke="#CED6E0"
                        stroke-width="1.7"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="0.833333"
                        cy="0.833333"
                        r="0.833333"
                        transform="matrix(-1 0 0 1 10.8335 14.333)"
                        fill="#CED6E0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_833_4465">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(-1 0 0 1 20 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
               <div class="flex justify-around mt-4">
                <div class="flex items-center space-s-2 px-4">
                  <svg 
                  class="stroke-black dark:stroke-white"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.67163 14.8687C10.751 14.8687 14.8687 10.751 14.8687 5.67163C14.8687 4.74246 14.7309 3.84548 14.4746 3C18.251 4.14461 21 7.65276 21 11.803C21 16.8824 16.8824 21 11.803 21C7.65276 21 4.14461 18.251 3 14.4746C3.84548 14.7309 4.74246 14.8687 5.67163 14.8687Z"  stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span>تاریک</span>
                </div>
                <div class="flex items-center space-s-1 bg-white dark:bg-slate-600 rounded-xl py-3 px-10" @click="toggleDark()">
                  <svg 
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM12.75 21C12.75 20.5858 12.4142 20.25 12 20.25C11.5858 20.25 11.25 20.5858 11.25 21V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V21ZM19.6014 4.39849C19.8943 4.69139 19.8943 5.16626 19.6014 5.45915L18.8943 6.16626C18.6014 6.45915 18.1265 6.45915 17.8336 6.16626C17.5407 5.87337 17.5407 5.39849 17.8336 5.1056L18.5407 4.39849C18.8336 4.1056 19.3085 4.1056 19.6014 4.39849ZM6.16632 18.8942C6.45921 18.6013 6.45921 18.1264 6.16632 17.8336C5.87342 17.5407 5.39855 17.5407 5.10566 17.8336L4.39855 18.5407C4.10566 18.8336 4.10566 19.3084 4.39855 19.6013C4.69144 19.8942 5.16632 19.8942 5.45921 19.6013L6.16632 18.8942ZM22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12ZM3 12.75C3.41421 12.75 3.75 12.4142 3.75 12C3.75 11.5858 3.41421 11.25 3 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H3ZM19.6014 19.6014C19.3085 19.8943 18.8336 19.8943 18.5407 19.6014L17.8336 18.8943C17.5407 18.6014 17.5407 18.1265 17.8336 17.8336C18.1265 17.5407 18.6014 17.5407 18.8943 17.8336L19.6014 18.5407C19.8943 18.8336 19.8943 19.3085 19.6014 19.6014ZM5.10566 6.16632C5.39856 6.45921 5.87343 6.45921 6.16633 6.16632C6.45922 5.87342 6.45922 5.39855 6.16633 5.10566L5.45922 4.39855C5.16633 4.10566 4.69145 4.10566 4.39856 4.39855C4.10566 4.69144 4.10566 5.16632 4.39856 5.45921L5.10566 6.16632Z" fill="#FFB443"/>
                  </svg>
                  <span>روشن</span>
                </div>
               </div>
              </div>
            </div>
    </div>
  </div>
  <!-- end col 4-->
  <!-- header-->
  <div class="bg-white w-full p-4 dark:bg-slate-900">
    <div class="container mx-auto flex justify-between">
      <!-- hamberger -->
      <div class="flex items-center me-2 lg:hidden" @click="toggledrop1">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 dark:text-white rounded-md"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <!-- end hamberger -->
      <!-- logo -->
      <div class="flex flex-1 items-center">
        <a href="Almaex">
          <svg
            width="147"
            height="38"
            viewBox="0 0 147 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5132 16.246H6.15186L4.61672 19.621H0.959473L8.98886 1.71484H12.6724L20.7056 19.621H17.022L15.5132 16.246ZM10.8325 5.47744L7.50639 13.1005H14.1587L10.8325 5.47744Z"
              fill="black"
            />
            <path
              d="M24.8295 1.7373V19.6209H21.7329V1.7373H24.8295Z"
              fill="black"
            />
            <path
              d="M35.9592 19.621V12.8672C35.9592 11.2041 35.09 9.69531 33.3743 9.69531C31.6585 9.69531 30.6878 11.2041 30.6878 12.8672V19.621H27.5686V6.98248H30.4583L30.6878 8.51762C31.3538 7.23833 32.8099 6.7793 34.0139 6.7793C35.5227 6.7793 37.0315 7.3926 37.7502 9.13468C38.8752 7.34369 40.3351 6.83197 41.9718 6.83197C45.5538 6.83197 47.3185 9.03309 47.3185 12.8183V19.6248H44.1955V12.8183C44.1955 11.1552 43.507 9.74799 41.8176 9.74799C40.1282 9.74799 39.0784 11.2079 39.0784 12.8672V19.621H35.9592Z"
              fill="black"
            />
            <path
              d="M60.4951 7.00862H63.4901V19.6208H60.5477L60.3935 17.7772C59.6786 19.2596 57.707 19.9783 56.2998 20.0046C52.5635 20.031 49.8018 17.7283 49.8018 13.3034C49.8018 8.87863 52.6914 6.67751 56.375 6.70385C58.0644 6.70385 59.6748 7.49775 60.3935 8.7507L60.4951 7.01238V7.00862ZM52.9209 13.3034C52.9209 15.7077 54.584 17.1413 56.6572 17.1413C61.5674 17.1413 61.5674 9.49193 56.6572 9.49193C54.584 9.49193 52.9209 10.8991 52.9209 13.3034Z"
              fill="black"
            />
            <path
              d="M71.3238 14.4288C71.5269 15.9902 72.8852 17.1153 75.0864 17.1153C76.2377 17.1153 77.7465 16.6788 78.4614 15.9376L80.4556 17.9092C79.1236 19.29 76.9489 19.956 75.0299 19.956C70.6804 19.956 68.0955 17.2695 68.0955 13.2285C68.0955 9.18747 70.7067 6.62891 74.7966 6.62891C78.8866 6.62891 81.6521 9.23639 81.1667 14.4325H71.3162L71.3238 14.4288ZM78.1792 11.8439C77.976 10.2071 76.6968 9.38689 74.9058 9.38689C73.2164 9.38689 71.8355 10.2071 71.3764 11.8439H78.183H78.1792Z"
              fill="#0056F1"
            />
            <path
              d="M90.2271 7.00879H93.9633V7.11038L89.8207 13.2246L94.2192 19.542V19.6173H90.4829L87.7437 15.3956L85.0046 19.6173H81.2683V19.542L85.6705 13.2246L81.5242 7.11038V7.00879H85.2604L87.7437 11.2793L90.2271 7.00879Z"
              fill="#0056F1"
            />
            <path
              d="M7.55905 34.2593C7.55905 33.7378 7.25278 33.4771 6.64023 33.4771H4.28108V31.2173C4.28108 30.5302 4.48802 29.9756 4.90191 29.5534C5.31579 29.123 5.87454 28.9078 6.57815 28.9078H8.15505L8.24197 29.9384H6.55331C6.18909 29.9384 5.89109 30.0584 5.65932 30.2984C5.43582 30.5302 5.32407 30.8241 5.32407 31.18V32.4093H6.81406C7.41006 32.4093 7.85291 32.5665 8.14263 32.8811C8.44063 33.1874 8.58963 33.6261 8.58963 34.1972C8.58963 34.7187 8.43649 35.203 8.13022 35.65C7.83222 36.097 7.42247 36.4488 6.90098 36.7054C6.38776 36.9703 5.8166 37.1027 5.18749 37.1027H4.23141C3.18842 37.1027 2.38548 36.8006 1.8226 36.1963C1.25971 35.592 0.978271 34.7477 0.978271 33.6633V31.3166H2.00885V33.6385C2.00885 34.4249 2.19923 35.0209 2.58001 35.4265C2.96078 35.8321 3.51953 36.0349 4.25625 36.0349H5.18749C5.65104 36.0349 6.06079 35.9563 6.41673 35.799C6.78095 35.65 7.06239 35.4389 7.26106 35.1657C7.45972 34.9008 7.55905 34.5987 7.55905 34.2593Z"
              fill="black"
            />
            <path
              d="M12.8127 33.713C12.8127 34.4 12.6761 35.0002 12.403 35.5134C12.1298 36.0266 11.7449 36.4198 11.2482 36.693C10.7598 36.9661 10.197 37.1027 9.55958 37.1027H9.21191L9.11258 36.0349H9.53474C10.2383 36.0349 10.7888 35.8279 11.1861 35.4141C11.5835 35.0085 11.7821 34.4414 11.7821 33.713V30.0749H12.8127V33.713ZM11.5462 28.5849V27.5544H12.8624V28.5849H11.5462Z"
              fill="black"
            />
            <path
              d="M17.0324 33.713C17.0324 34.4 16.8958 35.0002 16.6227 35.5134C16.3495 36.0266 15.9646 36.4198 15.4679 36.693C14.9795 36.9661 14.4167 37.1027 13.7793 37.1027H13.4316L13.3323 36.0349H13.7544C14.458 36.0349 15.0085 35.8279 15.4058 35.4141C15.8032 35.0085 16.0018 34.4414 16.0018 33.713V30.0749H17.0324V33.713Z"
              fill="black"
            />
            <path
              d="M19.1453 26.0396H20.1758V34.0731H19.1453V26.0396Z"
              fill="black"
            />
            <path
              d="M31.8965 33.0052C32.1945 33.0052 32.4346 32.9225 32.6167 32.7569C32.7988 32.5914 32.8898 32.372 32.8898 32.0988V30.0749H33.9204V32.1237C33.9204 32.7279 33.7342 33.2039 33.3617 33.5516C32.9974 33.8992 32.5091 34.0731 31.8965 34.0731H27.4514C26.7229 34.0731 26.1725 33.8827 25.8 33.5019C25.4357 33.1211 25.2536 32.5955 25.2536 31.925V30.0749H26.2842V31.7884C26.2842 32.5996 26.694 33.0052 27.5135 33.0052H31.8965ZM31.2136 28.051V29.0319H27.9356V28.051H31.2136Z"
              fill="black"
            />
            <path
              d="M38.2836 33.0052C38.325 33.0052 38.3539 33.0425 38.3705 33.117C38.3953 33.1832 38.4077 33.3281 38.4077 33.5516C38.4077 33.7668 38.3953 33.9075 38.3705 33.9737C38.3539 34.04 38.325 34.0731 38.2836 34.0731H37.9607C37.3316 34.0731 36.8515 33.8868 36.5204 33.5143C36.1976 33.1336 36.0362 32.5955 36.0362 31.9002V26.0396H37.0667V31.8505C37.0667 32.6203 37.3813 33.0052 38.0104 33.0052H38.2836Z"
              fill="black"
            />
            <path
              d="M42.4864 28.9574C42.983 28.9574 43.3928 29.0402 43.7156 29.2058C44.0385 29.3713 44.3075 29.6445 44.5227 30.0253C44.7379 30.3978 44.9242 30.9151 45.0814 31.5773L44.1005 32.1733C44.233 32.4879 44.3903 32.7073 44.5724 32.8314C44.7545 32.9473 45.0111 33.0052 45.3422 33.0052H46.1617C46.2445 33.0052 46.2859 33.1874 46.2859 33.5516C46.2859 33.7751 46.2734 33.9199 46.2486 33.9862C46.2238 34.0441 46.1948 34.0731 46.1617 34.0731H45.3049C44.8083 34.0731 44.4151 33.9737 44.1254 33.7751C43.8357 33.5681 43.5708 33.1956 43.3307 32.6576L42.474 33.1915C41.9442 33.5226 41.4351 33.7544 40.9467 33.8868C40.4583 34.011 39.8499 34.0731 39.1215 34.0731H38.2896C38.2068 34.0731 38.1654 33.8992 38.1654 33.5516C38.1654 33.1874 38.2068 33.0052 38.2896 33.0052H39.1587C39.7796 33.0052 40.2969 32.9556 40.7108 32.8562C41.1247 32.7569 41.551 32.5831 41.9897 32.3348L43.877 31.2297C43.7446 30.7827 43.5625 30.4723 43.3307 30.2984C43.1072 30.1246 42.7678 30.0377 42.3125 30.0377H39.4071L39.5437 28.9574H42.4864ZM40.5866 36.6681V35.6376H41.9028V36.6681H40.5866Z"
              fill="black"
            />
            <path
              d="M46.544 33.0052C46.842 33.0052 47.082 32.9225 47.2641 32.7569C47.4463 32.5914 47.5373 32.3679 47.5373 32.0864V26.0396H48.5803V32.0988C48.5803 32.7114 48.3941 33.1956 48.0216 33.5516C47.6491 33.8992 47.1565 34.0731 46.544 34.0731H46.1591C46.0763 34.0731 46.0349 33.8992 46.0349 33.5516C46.0349 33.1874 46.0763 33.0052 46.1591 33.0052H46.544Z"
              fill="black"
            />
            <path
              d="M50.8172 26.0396H51.8478V34.0731H50.8172V26.0396Z"
              fill="black"
            />
            <path
              d="M59.8648 33.0052C59.9062 33.0052 59.9352 33.0425 59.9517 33.117C59.9766 33.1832 59.989 33.3281 59.989 33.5516C59.989 33.7668 59.9766 33.9075 59.9517 33.9737C59.9352 34.04 59.9062 34.0731 59.8648 34.0731H58.6728C58.5983 35.0167 58.2755 35.7576 57.7043 36.2956C57.1332 36.8337 56.3882 37.1027 55.4694 37.1027H53.9421L53.8428 36.0349H55.4818C56.144 36.0349 56.6696 35.8569 57.0587 35.501C57.456 35.1533 57.6588 34.6773 57.6671 34.0731H56.4254C55.5728 34.0731 54.9561 33.8992 54.5754 33.5516C54.2029 33.1956 54.0166 32.6452 54.0166 31.9002C54.0166 31.387 54.116 30.9317 54.3146 30.5343C54.5133 30.1287 54.7906 29.8183 55.1465 29.6031C55.5107 29.3796 55.9205 29.2679 56.3758 29.2679C57.0959 29.2679 57.663 29.5079 58.0768 29.988C58.4907 30.4681 58.6977 31.1262 58.6977 31.9623V33.0052H59.8648ZM55.0472 31.8381C55.0472 32.2603 55.1507 32.5624 55.3576 32.7445C55.5728 32.9183 55.9495 33.0052 56.4875 33.0052H57.6671V32.0368C57.6671 31.4656 57.5512 31.0352 57.3194 30.7454C57.0877 30.4557 56.7524 30.3109 56.3137 30.3109C55.9329 30.3109 55.6266 30.4516 55.3949 30.733C55.1631 31.0145 55.0472 31.3828 55.0472 31.8381Z"
              fill="black"
            />
            <path
              d="M60.7301 33.0052C61.3509 33.0052 61.8683 32.9556 62.2822 32.8562C62.6961 32.7569 63.1224 32.5831 63.5611 32.3348L65.4484 31.2297C65.316 30.7827 65.1339 30.4723 64.9021 30.2984C64.6786 30.1246 64.3392 30.0377 63.8839 30.0377H60.9784L61.115 28.9574H64.0578C64.5544 28.9574 64.9642 29.0402 65.287 29.2058C65.6098 29.3713 65.8788 29.6445 66.0941 30.0253C66.3093 30.3978 66.4955 30.9151 66.6528 31.5773L64.0453 33.1915C63.5156 33.5226 63.0065 33.7544 62.5181 33.8868C62.0297 34.011 61.4213 34.0731 60.6929 34.0731H59.8609C59.7782 34.0731 59.7368 33.8992 59.7368 33.5516C59.7368 33.1874 59.7782 33.0052 59.8609 33.0052H60.7301Z"
              fill="black"
            />
            <path
              d="M73.8788 33.0052C74.1685 33.0052 74.4003 32.9432 74.5741 32.819C74.7562 32.6948 74.8473 32.5334 74.8473 32.3348C74.8473 32.1692 74.781 31.896 74.6486 31.5153C74.5162 31.1345 74.1685 30.1743 73.6056 28.6346C73.5808 28.5684 73.5559 28.5063 73.5311 28.4484C73.5063 28.3821 73.4856 28.3242 73.469 28.2745L74.4251 27.84L75.8778 31.9623C76.0103 32.343 76.1593 32.6121 76.3248 32.7693C76.4904 32.9266 76.718 33.0052 77.0078 33.0052H77.2685C77.3513 33.0052 77.3927 33.1874 77.3927 33.5516C77.3927 33.7751 77.3802 33.9199 77.3554 33.9862C77.3389 34.0441 77.3099 34.0731 77.2685 34.0731H76.9705C76.5897 34.0731 76.2752 34.011 76.0268 33.8868C75.7785 33.7627 75.584 33.564 75.4433 33.2908C75.286 33.564 75.079 33.7627 74.8224 33.8868C74.5741 34.011 74.2595 34.0731 73.8788 34.0731H70.9733L70.874 33.0052H73.8788Z"
              fill="black"
            />
            <path
              d="M78.1424 33.0052C78.7632 33.0052 79.2806 32.9556 79.6945 32.8562C80.1084 32.7569 80.5347 32.5831 80.9734 32.3348L82.8607 31.2297C82.7283 30.7827 82.5462 30.4723 82.3144 30.2984C82.0909 30.1246 81.7515 30.0377 81.2962 30.0377H78.3907L78.5273 28.9574H81.4701C81.9667 28.9574 82.3765 29.0402 82.6993 29.2058C83.0221 29.3713 83.2911 29.6445 83.5064 30.0253C83.7216 30.3978 83.9078 30.9151 84.0651 31.5773L81.4576 33.1915C80.9279 33.5226 80.4188 33.7544 79.9304 33.8868C79.442 34.011 78.8336 34.0731 78.1052 34.0731H77.2732C77.1905 34.0731 77.1491 33.8992 77.1491 33.5516C77.1491 33.1874 77.1905 33.0052 77.2732 33.0052H78.1424Z"
              fill="black"
            />
            <path
              d="M85.7995 26.0396H86.83V34.0731H85.7995V26.0396Z"
              fill="black"
            />
            <path
              d="M93.6799 33.6757C93.6799 34.3793 93.5475 34.9878 93.2826 35.501C93.0177 36.0142 92.6411 36.4074 92.1527 36.6806C91.6726 36.962 91.1055 37.1027 90.4516 37.1027H88.9244L88.825 36.0349H90.464C91.1262 36.0349 91.6519 35.8569 92.0409 35.501C92.4382 35.1533 92.6411 34.6773 92.6493 34.0731H91.4077C90.5551 34.0731 89.9384 33.8992 89.5576 33.5516C89.1851 33.1956 88.9989 32.6452 88.9989 31.9002C88.9989 31.387 89.0982 30.9317 89.2969 30.5343C89.4955 30.1287 89.7728 29.8183 90.1288 29.6031C90.493 29.3796 90.9027 29.2679 91.358 29.2679C92.0782 29.2679 92.6452 29.5079 93.0591 29.988C93.473 30.4681 93.6799 31.1262 93.6799 31.9623V33.6757ZM90.0294 31.8381C90.0294 32.2603 90.1329 32.5624 90.3398 32.7445C90.5551 32.9183 90.9317 33.0052 91.4698 33.0052H92.6493V32.0368C92.6493 31.4656 92.5334 31.0352 92.3017 30.7454C92.0699 30.4557 91.7346 30.3109 91.2959 30.3109C90.9151 30.3109 90.6089 30.4516 90.3771 30.733C90.1453 31.0145 90.0294 31.3828 90.0294 31.8381Z"
              fill="black"
            />
            <path
              d="M137.662 12.0923C134.867 12.0859 132.069 12.0729 129.273 12.0599C127.558 12.0502 125.846 12.0437 124.134 12.034C123.359 12.0178 122.584 12.0242 121.809 12.0178C121.689 12.0178 121.569 12.0178 121.449 12.0178C119.688 12.0145 117.924 12.0015 116.16 11.9918C114.921 11.9918 113.686 11.9821 112.447 11.9756H112.444C112.291 11.9756 112.191 11.8167 112.262 11.6838C112.982 10.3445 113.796 9.06039 114.542 7.73411C115.249 6.5343 115.926 5.31503 116.659 4.13143C117.405 2.76948 118.216 1.44321 118.991 0.0974703C119.026 0.0358583 119.091 -0.00305453 119.162 0.000188203C120.379 0.0131591 121.598 -0.0127826 122.814 0.0326157L122.83 0.0164019C124.069 0.0228874 125.307 0.00991645 126.546 0.0423438C127.788 0.0261301 129.03 0.0423437 130.272 0.0520719C130.515 0.0520719 130.762 0.0520719 131.002 0.0520719C131.073 0.0520719 131.138 0.0909849 131.174 0.152597C133.392 4.03415 135.616 7.91246 137.834 11.794C137.909 11.927 137.815 12.0923 137.662 12.0923Z"
              fill="url(#paint0_linear_833_4426)"
            />
            <path
              d="M146.479 27.1094C145.056 29.5577 143.629 32.0027 142.199 34.4477C141.638 35.4108 141.077 36.3707 140.516 37.3338C140.5 37.363 140.477 37.3857 140.448 37.4019C140.418 37.4213 140.38 37.4311 140.344 37.4311C138.677 37.4213 137.01 37.4181 135.347 37.4116C134.325 37.4116 133.301 37.4051 132.279 37.4019C131.028 37.3954 129.779 37.3922 128.527 37.3889C128.456 37.3889 128.391 37.35 128.356 37.2884C127.282 35.4076 126.193 33.543 125.139 31.6525C125.064 31.5196 124.873 31.5163 124.795 31.6493C124.536 32.0935 124.279 32.5378 124.007 32.9723C123.2 34.4121 122.347 35.8292 121.523 37.2592C121.487 37.3208 121.423 37.3597 121.351 37.3565C121.095 37.3565 120.839 37.3532 120.583 37.3565C119.736 37.35 118.893 37.35 118.05 37.3435C117.016 37.337 115.981 37.337 114.947 37.3273C114.084 37.3208 113.222 37.3208 112.359 37.3176C111.419 37.3208 110.475 37.2884 109.538 37.3241C109.35 37.2884 109.308 37.0646 109.204 36.9349C108.85 36.3123 108.497 35.693 108.14 35.0704C106.587 32.3529 105.021 29.642 103.487 26.9149C103.451 26.8533 103.455 26.7754 103.487 26.7171C105.491 23.3284 107.446 19.9138 109.437 16.5187C109.473 16.4571 109.538 16.4214 109.609 16.4214C110.073 16.4246 110.537 16.4246 111 16.4279C112.327 16.4311 113.653 16.4408 114.979 16.4441C116.156 16.4538 117.333 16.4603 118.507 16.4635C118.634 16.4635 118.757 16.4635 118.883 16.4635C119.72 16.4635 120.557 16.4927 121.393 16.4571C121.426 16.4571 121.458 16.4571 121.484 16.4733C121.663 16.5673 121.721 16.7911 121.828 16.9467C122.82 18.6945 123.829 20.4359 124.821 22.187C124.896 22.3167 125.08 22.3232 125.158 22.1999C125.239 22.0767 125.304 21.9438 125.379 21.8173C126.397 20.0759 127.409 18.3346 128.427 16.5933C128.463 16.5316 128.527 16.4927 128.599 16.496C129.364 16.496 130.129 16.5025 130.895 16.5025C131.209 16.5025 131.524 16.5057 131.841 16.5089C132.876 16.5154 133.91 16.5187 134.945 16.5187C135.691 16.5219 136.436 16.5252 137.182 16.5284C138.294 16.5284 139.404 16.5479 140.516 16.5349L140.548 16.6289L140.513 16.5219C142.536 19.9657 144.485 23.4516 146.479 26.9149C146.515 26.9765 146.515 27.0543 146.479 27.1127V27.1094Z"
              fill="url(#paint1_linear_833_4426)"
            />
            <g opacity="0.5">
              <path
                opacity="0.5"
                d="M124.133 12.0338C125.849 12.0436 127.561 12.0533 129.273 12.0598L125.346 5.25977L121.445 12.0144C121.565 12.0144 121.685 12.0144 121.805 12.0144C122.58 12.0209 123.355 12.0144 124.13 12.0306L124.133 12.0338Z"
                fill="url(#paint2_linear_833_4426)"
              />
              <path
                opacity="0.5"
                d="M131.842 16.5022C131.527 16.5022 131.213 16.5022 130.895 16.4957C130.129 16.4957 129.364 16.4893 128.599 16.4893C128.528 16.4893 128.463 16.5282 128.427 16.5865C127.412 18.3279 126.397 20.0692 125.379 21.8106C125.304 21.9338 125.239 22.07 125.158 22.1932C125.077 22.3165 124.892 22.31 124.821 22.1803C123.829 20.4292 122.82 18.6911 121.828 16.94C121.718 16.7811 121.659 16.5606 121.484 16.4666C121.458 16.4503 121.426 16.4471 121.394 16.4503C120.557 16.486 119.72 16.4568 118.884 16.4568L108.137 35.0701C108.494 35.6927 108.847 36.3121 109.201 36.9347C109.305 37.0644 109.347 37.2882 109.535 37.3238C110.475 37.2914 111.416 37.3238 112.356 37.3173C113.219 37.3173 114.081 37.3238 114.944 37.3271C115.978 37.3368 117.013 37.3368 118.047 37.3433C118.89 37.3498 119.733 37.3498 120.58 37.3563C120.836 37.3563 121.092 37.3563 121.348 37.3563C121.419 37.3563 121.488 37.3206 121.52 37.259C122.347 35.8289 123.196 34.4119 124.004 32.9721C124.276 32.5376 124.536 32.0901 124.792 31.649C124.87 31.5161 125.061 31.5193 125.136 31.6523C126.19 33.5396 127.279 35.4074 128.352 37.2882C128.388 37.3498 128.453 37.3887 128.524 37.3887C129.773 37.3919 131.024 37.3984 132.276 37.4017H140.448C140.474 37.3854 140.5 37.3627 140.516 37.3336C141.077 36.3705 141.638 35.4106 142.199 34.4475L131.838 16.5055L131.842 16.5022Z"
                fill="url(#paint3_linear_833_4426)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_833_4426"
                x1="112.223"
                y1="6.09329"
                x2="137.844"
                y2="6.01546"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00DEE1" />
                <stop offset="0.3" stop-color="#3C53FD" />
                <stop offset="0.7" stop-color="#9927F6" />
                <stop offset="0.99" stop-color="#F89775" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_833_4426"
                x1="103.458"
                y1="26.9895"
                x2="146.505"
                y2="26.8565"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00DEE1" />
                <stop offset="0.3" stop-color="#3C53FD" />
                <stop offset="0.7" stop-color="#9927F6" />
                <stop offset="0.99" stop-color="#F89775" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_833_4426"
                x1="121.448"
                y1="8.66139"
                x2="129.273"
                y2="8.66139"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.99" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_833_4426"
                x1="108.137"
                y1="26.9276"
                x2="142.199"
                y2="26.9276"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.99" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
      <!-- end logo-->
      <!-- profile -->
      <div class="flex items-center">
        <div class="flex flex-row items-center divide-s">
          <div class="px-4">
            <svg
              class="stroke-[#28303F] dark:stroke-slate-100"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.67964 9.79403C6.05382 6.49085 8.77095 4 12 4C15.2291 4 17.9462 6.49085 18.3204 9.79403L18.6652 12.8385C18.7509 13.595 19.0575 14.3069 19.5445 14.88C20.5779 16.0964 19.7392 18 18.1699 18H5.83014C4.26081 18 3.42209 16.0964 4.45549 14.88C4.94246 14.3069 5.24906 13.595 5.33476 12.8385L5.67964 9.79403Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 21C14.5633 22.1652 13.385 23 12 23C10.615 23 9.43668 22.1652 9 21"
                stroke="#1CAC70"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="px-4">
            <!-- prof -->
            <svg
              class=""
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="40"
                height="40"
                rx="20"
                transform="matrix(-1 0 0 1 40 0)"
                fill="#FFB443"
              />
              <rect
                width="40"
                height="40"
                rx="20"
                transform="matrix(-1 0 0 1 40 0)"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_833_4420"
                    transform="translate(-0.25) scale(0.003125)"
                  />
                </pattern>
                <image
                  id="image0_833_4420"
                  width="480"
                  height="320"
                  xlink:href="data:image/jpeg;base64,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"
                />
              </defs>
            </svg>
            <!-- end prof -->
          </div>
        </div>
        <div class="dark:text-white">
          <h1 class="">حمیدرضا خواجه زاده</h1>
          <p class="text-sm text-gray-500">کاربر مدیریت</p>
        </div>

        <div class="ms-4">
          <svg
            class=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 14L17 10"
              stroke="#CED6E0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <!-- end profile-->
    </div>
  </div>
  <!-- end header-->

  <!-- navbar -->
  <div class="container mx-auto text-sm">
    <div class="mt-4">
      <div class="flex flex-row space-s-2">
        <div class="hidden lg:block basis-1/3 h-[calc(100vh-100px)]">
          <div
            class="sticky top-50 bg-white min-h-full rounded-xl dark:bg-slate-900 dark:text-white"
          >
            <div class="p-4">
              <!-- col 1 -->
              <div>
                <div
                  class="flex p-3 text-white bg-emerald-500 rounded-xl space-s-2 items-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M3 9.84694C3 8.99003 3.36644 8.17402 4.00691 7.60471L9.34255 2.86193C10.8581 1.51477 13.1419 1.51478 14.6575 2.86193L19.9931 7.60471C20.6336 8.17402 21 8.99003 21 9.84694V17.9997C21 20.2089 19.2091 21.9997 17 21.9997H7C4.79086 21.9997 3 20.2089 3 17.9997V9.84694Z"
                      fill="white"
                    />
                    <path
                      d="M10 18H14"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>

                  <p class="">پیشخوان</p>
                </div>
              </div>
              <!-- end col1-->
              <!-- col2 -->
              <div>
                <div class="flex p-3 rounded-xl space-s-2 items-center">
                  <svg
                    class="stroke-black dark:stroke-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="10"
                      height="8"
                      rx="2"
                      
                      stroke-width="1.5"
                    />
                    <rect
                      x="12"
                      y="14"
                      width="10"
                      height="8"
                      rx="2"
                      
                      stroke-width="1.5"
                    />
                    <path
                      d="M20.4142 4L21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711L20.4142 8M16 6L21.4142 6"
                     
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.58579 16L2.29289 17.2929C1.90237 17.6834 1.90237 18.3166 2.29289 18.7071L3.58579 20M8 18L2.58579 18"
                     
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p class="">خرید و فروش</p>
                </div>
              </div>
              <!-- end col2-->
              <!-- col3 -->
              <div>
                <div
                  class="flex p-3 rounded-xl justify-between items-center"
                  @click="toggledrop"
                >
                  <div
                    class="flex space-s-2 items-center dark:stroke-slate-100"
                  >
                    <svg
                      class="stroke-black dark:stroke-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6Z"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 6C22 3.79086 20.2091 2 18 2H12C9.79086 2 8 3.79086 8 6V6H22V6Z"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 12L2 16L6 16C7.10457 16 8 15.1046 8 14V14C8 12.8954 7.10457 12 6 12L2 12Z"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="">کیف پول</p>
                  </div>
                  <div class="flex">
                    <!-- icon -->
                    <div class="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10L12 14L17 10"
                          stroke="#CED6E0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <!-- end icon-->
                  </div>
                </div>
                <div
                  v-show="showdropdown"
                  role="none"
                  class="bg-[#F3F5F8] rounded-lg p-4 mt-4 dark:bg-slate-800 dark:text-white"
                >
                  <a
                    href="inventories"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >موجودی ها</a
                  >
                  <a
                    href="variz"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    >واریز</a
                  >
                  <a
                    href="bardasht"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    >برداشت</a
                  >
                  <a
                    href="listkharid"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    >لیست خرید ها</a
                  >
                  <a
                    href="listforosh"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    >لیست فروش ها</a
                  >
                </div>
              </div>
              <!-- end col3-->

              <!-- col 4 -->
              <div>
                <div
                  class="flex p-3 rounded-xl justify-between items-center"
                  @click="togglesidebar"
                >
                  <div class="flex space-s-2 items-center">
                    <svg
                      class=" stroke-black dark:stroke-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.301 18.9281L18.9215 18.5607C20.2077 17.799 21 16.3914 21 14.8681V9.13192C21 7.6086 20.2077 6.20099 18.9215 5.43932L14.0785 2.57125C12.7923 1.80958 11.2077 1.80958 9.92154 2.57125L5.07846 5.43932C3.7923 6.20099 3 7.6086 3 9.13192V14.8681C3 16.3914 3.7923 17.799 5.07846 18.5607L5.69896 18.9281M18.301 18.9281L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.69896 18.9281M18.301 18.9281C17.0431 16.6982 14.6924 15.1979 12 15.1979C9.30762 15.1979 6.95686 16.6982 5.69896 18.9281"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="3"
                        cy="3"
                        r="3"
                        transform="matrix(1 0 0 -1 9 12)"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p class="">حساب کاربری</p>
                  </div>
                  <div class="flex">
                    <!-- icon -->
                    <div class="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10L12 14L17 10"
                          stroke="#CED6E0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <!-- end icon-->
                  </div>
                </div>
                <div
                  v-show="showside"
                  role="none"
                  class="bg-[#F3F5F8] rounded-lg p-4 text-gray-700 dark:bg-slate-800 dark:text-white"
                >
                  <a
                    href="account"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >پروفایل کاربری</a
                  >
                  <a
                    href="hesab"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    >حساب بانکی</a
                  >

                  <a
                    href="device"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    >دستگاه های فعال</a
                  >

                  <a
                    href="ticket"
                    class="block px-4 py-2 text-sm border-r-2 dark:border-r-slate-600"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    >تیکت پشتیبانی</a
                  >
                </div>
              </div>
            </div>
            <!-- end col 4-->
            <!-- darkmode change-->
            <div class="p-4 absolute bottom-0 w-full">
              <div class="bg-gray-100 p-3 rounded-xl dark:bg-slate-800">
                <div class="flex justify-between">
                  <p>انتخاب رنگ</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_833_4465)">
                      <path
                        d="M12.5002 7.50033C12.5002 6.11961 11.3809 5.00033 10.0002 5.00033C8.61945 5.00033 7.50016 6.11961 7.50016 7.50033C7.50016 8.59447 8.20305 9.52445 9.18192 9.86335C9.61683 10.0139 10.0002 10.3734 10.0002 10.8337V11.667M1.66683 10.0003C1.66683 14.6027 5.39779 18.3337 10.0002 18.3337C14.6025 18.3337 18.3335 14.6027 18.3335 10.0003C18.3335 5.39795 14.6025 1.66699 10.0002 1.66699C5.39779 1.66699 1.66683 5.39795 1.66683 10.0003Z"
                        stroke="#CED6E0"
                        stroke-width="1.7"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="0.833333"
                        cy="0.833333"
                        r="0.833333"
                        transform="matrix(-1 0 0 1 10.8335 14.333)"
                        fill="#CED6E0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_833_4465">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(-1 0 0 1 20 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
               <div class="flex justify-around mt-4">
                <div class="flex items-center space-s-2 px-4">
                  <svg 
                  class="stroke-black dark:stroke-white"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.67163 14.8687C10.751 14.8687 14.8687 10.751 14.8687 5.67163C14.8687 4.74246 14.7309 3.84548 14.4746 3C18.251 4.14461 21 7.65276 21 11.803C21 16.8824 16.8824 21 11.803 21C7.65276 21 4.14461 18.251 3 14.4746C3.84548 14.7309 4.74246 14.8687 5.67163 14.8687Z"  stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span>تاریک</span>
                </div>
                <div class="flex items-center space-s-1 bg-white dark:bg-slate-600 rounded-xl py-3 px-10" @click="toggleDark()">
                  <svg 
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM12.75 21C12.75 20.5858 12.4142 20.25 12 20.25C11.5858 20.25 11.25 20.5858 11.25 21V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V21ZM19.6014 4.39849C19.8943 4.69139 19.8943 5.16626 19.6014 5.45915L18.8943 6.16626C18.6014 6.45915 18.1265 6.45915 17.8336 6.16626C17.5407 5.87337 17.5407 5.39849 17.8336 5.1056L18.5407 4.39849C18.8336 4.1056 19.3085 4.1056 19.6014 4.39849ZM6.16632 18.8942C6.45921 18.6013 6.45921 18.1264 6.16632 17.8336C5.87342 17.5407 5.39855 17.5407 5.10566 17.8336L4.39855 18.5407C4.10566 18.8336 4.10566 19.3084 4.39855 19.6013C4.69144 19.8942 5.16632 19.8942 5.45921 19.6013L6.16632 18.8942ZM22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12ZM3 12.75C3.41421 12.75 3.75 12.4142 3.75 12C3.75 11.5858 3.41421 11.25 3 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H3ZM19.6014 19.6014C19.3085 19.8943 18.8336 19.8943 18.5407 19.6014L17.8336 18.8943C17.5407 18.6014 17.5407 18.1265 17.8336 17.8336C18.1265 17.5407 18.6014 17.5407 18.8943 17.8336L19.6014 18.5407C19.8943 18.8336 19.8943 19.3085 19.6014 19.6014ZM5.10566 6.16632C5.39856 6.45921 5.87343 6.45921 6.16633 6.16632C6.45922 5.87342 6.45922 5.39855 6.16633 5.10566L5.45922 4.39855C5.16633 4.10566 4.69145 4.10566 4.39856 4.39855C4.10566 4.69144 4.10566 5.16632 4.39856 5.45921L5.10566 6.16632Z" fill="#FFB443"/>
                  </svg>
                  <span>روشن</span>
                </div>
               </div>
              </div>
            </div>
            <!-- enddarkmodechange-->
          </div>
        </div>
        <!-- end navbar-->
        <!-- buy and sell-->
        <div class="flex flex-col w-full">
          <div class="">
            <div
              class="basis-3/4 bg-white w-full rounded-xl dark:bg-slate-900 dark:text-white"
            >
              <div class="p-4">
                <!-- header-->
                <div
                  class="flex flex-row border-b py-4 dark:border-b dark:border-b-slate-800"
                >
                  <div class="flex md:flex items-center flex-1 md:space-s-6">
                    <div>
                      <h1 class="hidden md:block font-bold">خرید و فروش</h1>
                    </div>
                    <div
                      class="flex bg-slate-200 p-1.5 rounded-3xl md:flex items-center space-s-2 dark:bg-slate-800"
                    >
                      <div
                        class="bg-white px-9 p-1 rounded-3xl flex dark:bg-slate-600"
                      >
                        <span>خرید</span>
                      </div>
                      <div class="px-8">
                        <span>فروش</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center md:flex">
                    <div class="flex-1">
                      <div class="bg-cyan-50 p-3 rounded-xl dark:bg-slate-800">
                        <div class="flex items-center space-s-2">
                          <svg
                            class="stroke-black dark:stroke-white"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_833_4262)">
                              <path
                                d="M16.5 4.5H5.5C3.29086 4.5 1.5 6.29086 1.5 8.5V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H12.5C14.7091 16.5 16.5 14.7091 16.5 12.5V4.5Z"
                                stroke-width="1.3"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16.5 4.5C16.5 2.84315 15.1569 1.5 13.5 1.5H9C7.34315 1.5 6 2.84315 6 4.5V4.5H16.5V4.5Z"
                                stroke-width="1.3"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M1.5 9L1.5 12L4.5 12C5.32843 12 6 11.3284 6 10.5V10.5C6 9.67157 5.32843 9 4.5 9L1.5 9Z"
                                stroke-width="1.3"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_833_4262">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>کیف پول شما :</span>
                          <span class="font-bold">۱۰٬۹۰۰٬۰۰۰</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end header-->
                <!-- price -->
                <div class="">
                  <div class="flex flex-col md:flex md:flex-row space-s-2">
                    <div class="flex-1">
                      <div class="flex flex-col">
                        <div
                          class="bg-white border rounded-full p-1.5 mt-2 dark:bg-slate-800 dark:border-0"
                        >
                          <div class="flex flex-row">
                            <div
                              class="flex-1 bg-emerald-500 p-3 rounded-full flex justify-center items-center dark:bg-slate-600"
                            >
                              <p class="text-white">قیمت معین</p>
                            </div>
                            <div
                              class="flex-1 flex justify-center items-center"
                            >
                              <p>قیمت بازار</p>
                            </div>
                          </div>
                        </div>

                        <!-- tether -->
                        <div class="flex flex-col">
                          <div class="flex-1">
                            <div class="flex flex-col">
                              <div
                                class="bg-white border rounded-full p-2 mt-2 dark:bg-slate-800 dark:border-0 relative"
                                
                              >
                                <div class="flex justify-end flex-row space-s-6">
                                  <div class="flex flex-1 items-center space-s-2 cursor-pointer" @click="isOptionsExpanded = !isOptionsExpanded"
                                @blur="isOptionsExpanded = false">
                                    <!-- icon -->
                                    <div class="flex items-center space-s-1">
                                      <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx="20"
                                          cy="20"
                                          r="20"
                                          fill="#00BE91"
                                        />
                                        <path
                                          d="M27.6924 13.3657H12.3078C11.5193 13.3657 10.8655 14.0196 10.8655 14.808C10.8655 15.5965 11.5193 16.2503 12.3078 16.2503H18.5578V26.3465C18.5578 27.135 19.2116 27.7888 20.0001 27.7888C20.7886 27.7888 21.4424 27.135 21.4424 26.3465V16.2503H27.6924C28.4809 16.2503 29.1347 15.5965 29.1347 14.808C29.1347 14.0196 28.4809 13.3657 27.6924 13.3657Z"
                                          fill="white"
                                        />
                                      </svg>
                                      <div class="flex flex-col">
                                        <span class="">تتر</span>
                                        <span class="text-xs text-center"
                                          >TetherUSDT</span
                                        >
                                      </div>
                                    </div>
                                    <!-- end icon-->
                                    <div class="flex">
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M16.6 6.4585L11.1667 11.8918C10.525 12.5335 9.47502 12.5335 8.83336 11.8918L3.40002 6.4585"
                                          stroke="#A8A8A8"
                                          stroke-width="1.5"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    class="rounded-full bg-black text-white text-center dark:bg-slate-600 w-[275px] focus:outline-none"
                                  />
                                </div>
                              </div>
                              <transition
                                enter-active-class="transform transition duration-500 ease-custom"
                                enter-from-class="-translate-y-1/2 scale-y-0 opacity-0"
                                enter-to-class="translate-y-0 scale-y-100 opacity-100"
                                leave-active-class="transform transition duration-300 ease-custom"
                                leave-class="translate-y-0 scale-y-100 opacity-100"
                                leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
                              >
                                <div
                                @click="isOptionsExpanded = !isOptionsExpanded"
                                  v-show="isOptionsExpanded"
                                  class="absolute mt-2 w-48 bg-white rounded-2xl shadow-2xl overflow-hidden text-black z-20 cursor-pointer dark:bg-slate-600 dark:text-white"
                                >
                                  <div
                                    class="flex items-center space-s-2 border-b p-2 dark:border-slate-500"
                                  >
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="0 0 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        width="50"
                                        height="50"
                                        rx="15"
                                        fill="#E1FFF7"
                                      />
                                      <circle
                                        cx="25"
                                        cy="24"
                                        r="13"
                                        fill="#00BE91"
                                      />
                                      <path
                                        d="M30 19.6875H20C19.4875 19.6875 19.0625 20.1125 19.0625 20.625C19.0625 21.1375 19.4875 21.5625 20 21.5625H24.0625V28.125C24.0625 28.6375 24.4875 29.0625 25 29.0625C25.5125 29.0625 25.9375 28.6375 25.9375 28.125V21.5625H30C30.5125 21.5625 30.9375 21.1375 30.9375 20.625C30.9375 20.1125 30.5125 19.6875 30 19.6875Z"
                                        fill="white"
                                      />
                                    </svg>  
                                    <div class="flex flex-col mt-2">
                                      <span class="text-sm">تتر</span>
                                      <span class="text-xs">Tether</span>
                                    </div>
                                  </div>
                                  <div
                                    class="flex items-center space-s-2 border-b p-2 dark:border-slate-500"
                                  >
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="0 0 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                      <rect
                                        width="50"
                                        height="50"
                                        rx="15"
                                        fill="#F01010"
                                        fill-opacity="0.1"
                                      />
                                      <rect
                                        x="12"
                                        y="11"
                                        width="26"
                                        height="26"
                                        fill="url(#pattern0)"
                                      />
                                      <defs>
                                        <pattern
                                          id="pattern0"
                                          patternContentUnits="objectBoundingBox"
                                          width="1"
                                          height="1"
                                        >
                                          <use
                                            xlink:href="#image0_622_2207"
                                            transform="scale(0.00142857)"
                                          />
                                        </pattern>
                                        <image
                                          id="image0_622_2207"
                                          width="700"
                                          height="700"
                                          xlink:href="data:image/png;base64,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"
                                        />
                                      </defs>
                                    </svg>
                                    <div class="flex flex-col mt-2">
                                      <span class="text-sm">پرفکت مانی</span>
                                      <span class="text-xs">Perfect Money</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center space-s-2 p-2">
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="0 0 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                      <rect
                                        width="50"
                                        height="50"
                                        rx="15"
                                        fill="#F01010"
                                        fill-opacity="0.1"
                                      />
                                      <rect
                                        x="12"
                                        y="11"
                                        width="26"
                                        height="26"
                                        fill="url(#pattern0)"
                                      />
                                      <defs>
                                        <pattern
                                          id="pattern0"
                                          patternContentUnits="objectBoundingBox"
                                          width="1"
                                          height="1"
                                        >
                                          <use
                                            xlink:href="#image0_622_2207"
                                            transform="scale(0.00142857)"
                                          />
                                        </pattern>
                                        <image
                                          id="image0_622_2207"
                                          width="700"
                                          height="700"
                                          xlink:href="data:image/png;base64,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"
                                        />
                                      </defs>
                                    </svg>
                                    <div class="flex flex-col mt-2">
                                      <span class="text-sm"
                                        >ووچر پرفکت مانی</span
                                      >
                                      <span class="text-xs">Perfect Money</span>
                                    </div>
                                  </div>
                                </div>
                              </transition>
                            </div>
                          </div>
                        </div>
                        <!-- end tether-->
                        <!-- change button -->
                        <div>
                          <div class="flex flex-col">
                            <div class="flex-1">
                              <div class="flex flex-col">
                                <div class="flex justify-center">
                                  <div
                                    class="bg-gray-200 border rounded-full p-1 mt-2 px-3 dark:bg-slate-600 dark:border-0"
                                  >
                                    <button class="flex">
                                      <svg
                                        class="me-2"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx="10.5"
                                          cy="10.5"
                                          r="10.5"
                                          fill="#171717"
                                        />
                                        <path
                                          d="M8.90744 15.0062L6.24744 12.3462"
                                          stroke="white"
                                          stroke-opacity="0.8"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M8.90771 5.99365V15.0062"
                                          stroke="white"
                                          stroke-opacity="0.8"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M12.0923 5.99365L14.7523 8.65365"
                                          stroke="white"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M12.0923 15.0062V5.99365"
                                          stroke="white"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </svg>
                                      جابجایی
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="flex-1"></div>
                          </div>
                        </div>
                        <!-- end change button-->
                        <!-- toman -->
                        <div class="flex flex-col">
                          <div class="flex-1">
                            <div class="flex flex-col">
                              <div
                                class="bg-white border rounded-full p-2 mt-2 dark:bg-slate-800 dark:border-0 relative   ">
                                <div class="flex justify-end flex-row space-s-4">
                                  <div class="flex flex-1 items-center space-s-2 cursor-pointer"  @click="isOptionsExpanded1 = !isOptionsExpanded1"
                                @blur="isOptionsExpanded1 = false">
                                    <!-- icon -->
                                    <div class="flex items-center space-s-1">
                                      <svg 
                                      width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.6125 26.8212H35.7917V26.7056H35.4911V26.8212H32.6703V26.7056H32.3582V26.8212H29.5374V26.7056H29.2253V26.8212H26.4045V26.7056H26.0923V26.8212H23.2716V26.7056H22.9594V26.8212H20.1386V26.7056H19.8265V26.8212H17.0057V26.7056H16.6936V26.8212H13.8728V26.7056H13.5607V26.8212H10.7399V26.7056H10.4277V26.8212H7.60694V26.7056H7.29481V26.8212H4.5087V26.7056H4.19657V26.8212H1.38734V26.7056H1.15613C1.23705 26.9252 1.31798 27.1564 1.41046 27.3761H2.33531V27.5957H1.50295C1.56075 27.7345 1.61855 27.8616 1.67636 28.0004H2.69369V27.3298H2.91334V28.6246H3.31796V27.3298H3.53761V28.6246H3.94223V27.3298H4.16188V28.8443H2.68213V28.22H1.76884C1.82664 28.3587 1.89601 28.4859 1.95381 28.6246H2.32375V28.8443H2.05786C5.32951 35.4569 12.1271 40.0003 19.9999 40.0003C27.8727 40.0003 34.6703 35.4569 37.942 28.8443H37.098V28.22H36.0691V28.8905H35.8379V28.0004H37.3177V28.6246H38.046C38.1154 28.4859 38.1732 28.3587 38.231 28.22H37.6761V28.0004H38.335C38.3928 27.8616 38.4506 27.7345 38.5084 27.5957H35.8033V27.3761H38.6009C38.6934 27.1564 38.7743 26.9252 38.8552 26.7056H38.624V26.8212H38.6125ZM4.5087 27.3761H8.57804V27.5957H4.5087V27.3761ZM5.45667 28.8443H5.14454V28.6246H5.45667V28.8443ZM7.28325 28.8443H5.80349V28.22H4.7746V28.8905H4.55494V28.0004H6.0347V28.6246H7.0636V28.22H6.39308V28.0004H7.28325V28.8443V28.8443ZM10.4162 28.8443H8.93641V28.22H7.90752V28.6246H8.57804V28.8443H7.68787V28.0004H8.93641V27.3298H9.15607V28.6246H9.56069V27.3298H9.78034V28.6246H10.185V27.3298H10.4046V28.8443H10.4162ZM10.7745 27.3761H14.8439V27.5957H10.7745V27.3761ZM11.711 28.8443H11.3988V28.6246H11.711V28.8443ZM13.5375 28.8443H12.0578V28.22H11.0289V28.8905H10.8092V28.0004H12.289V28.6246H13.3179V28.22H12.6474V28.0004H13.5375V28.8443ZM16.6705 28.8443H15.1907V28.22H14.1618V28.6246H14.8323V28.8443H13.9422V28.0004H15.1907V27.3298H15.4103V28.6246H15.815V27.3298H16.0346V28.6246H16.4392V27.3298H16.6589V28.8443H16.6705ZM17.9652 28.8443H17.6531V28.6246H17.9652V28.8443ZM19.8034 28.8443H18.3236V28.22H17.2947V28.8905H17.0751V28.0004H18.5548V28.6246H19.5837V28.22H18.9132V28.0004H19.8034V28.8443ZM17.0288 27.5957V27.3761H21.0982V27.5957H17.0288ZM22.9247 28.8443H21.445V28.22H20.4161V28.6246H21.0866V28.8443H20.1964V28.0004H21.445V27.3298H21.6646V28.6246H22.0693V27.3298H22.2889V28.6246H22.6935V27.3298H22.9132V28.8443H22.9247ZM23.2831 27.3761H27.3525V27.5957H23.2831V27.3761ZM24.2195 28.8443H23.9074V28.6246H24.2195V28.8443ZM26.0577 28.8443H24.5779V28.22H23.549V28.8905H23.3294V28.0004H24.8091V28.6246H25.838V28.22H25.1675V28.0004H26.0577V28.8443ZM29.179 28.8443H27.6993V28.22H26.6704V28.6246H27.3409V28.8443H26.4507V28.0004H27.6993V27.3298H27.9189V28.6246H28.3235V27.3298H28.5432V28.6246H28.9478V27.3298H29.1675V28.8443H29.179ZM29.5374 27.3761H33.6067V27.5957H29.5374V27.3761ZM30.4854 28.8443H30.1732V28.6246H30.4854V28.8443ZM32.3119 28.8443H30.8322V28.22H29.8033V28.8905H29.5836V28.0004H31.0634V28.6246H32.0923V28.22H31.4218V28.0004H32.3119V28.8443ZM35.4449 28.8443H33.9651V28.22H32.9362V28.6246H33.6067V28.8443H32.7166V28.0004H33.9651V27.3298H34.1848V28.6246H34.5894V27.3298H34.809V28.6246H35.2137V27.3298H35.4333V28.8443H35.4449ZM36.4275 28.6246H36.7397V28.8443H36.4275V28.6246Z" fill="#DA0000"/>
<path d="M38.6124 13.4096H35.7916V13.2939H35.491V13.4096H32.6703V13.2939H32.3581V13.4096H29.5373V13.2939H29.2252V13.4096H26.4044V13.2939H26.0923V13.4096H23.2715V13.2939H22.9594V13.4096H20.1386V13.2939H19.8264V13.4096H17.0056V13.2939H16.6935V13.4096H13.8727V13.2939H13.5606V13.4096H10.7398V13.2939H10.4277V13.4096H7.60688V13.2939H7.29474V13.4096H4.50863V13.2939H4.1965V13.4096H1.38727V13.2939H1.15606C0.416182 15.3864 0 17.6407 0 19.9991C0 22.3575 0.404621 24.6118 1.15606 26.7042H1.38727V26.5886H4.20806V26.7042H4.5202V26.5886H7.34098V26.7042H7.65312V26.5886H10.4739V26.7042H10.786V26.5886H13.6068V26.7042H13.919V26.5886H16.7398V26.7042H17.0519V26.5886H19.8727V26.7042H20.1848V26.5886H23.0056V26.7042H23.3177V26.5886H26.1385V26.7042H26.4507V26.5886H29.2714V26.7042H29.5836V26.5886H32.4044V26.7042H32.7165V26.5886H35.491V26.7042H35.8032V26.5886H38.6124V26.7042H38.8436C39.5835 24.6118 39.9997 22.3575 39.9997 19.9991C39.9997 17.6407 39.5951 15.3864 38.8436 13.2939H38.6124V13.4096ZM18.7282 15.1321C18.7975 15.502 19.1559 15.7448 19.5259 15.6754C19.7224 15.6407 19.8958 15.5136 19.9883 15.3402C20.0923 15.5136 20.2542 15.6292 20.4507 15.6754C20.8206 15.7448 21.179 15.502 21.2484 15.1321C21.3756 15.4442 21.2715 15.8026 20.9941 15.9991C20.6704 16.2303 20.2079 16.1494 19.9883 15.8257C19.7571 16.1494 19.3062 16.2303 18.9825 15.9991C18.7166 15.8026 18.6126 15.4442 18.7282 15.1321ZM15.4912 18.08C16.0114 17.1783 16.8785 16.5309 17.8843 16.2766C15.6646 17.9413 15.2138 21.0974 16.89 23.317C16.89 23.317 16.89 23.3285 16.9016 23.3285C15.0519 22.265 14.4276 19.9182 15.4912 18.08ZM20.786 23.9066C21.4102 24.1378 22.0807 24.2418 22.7513 24.2072C21.9651 24.4615 21.1559 24.4962 20.3929 24.3343L20.3813 24.4962L19.9883 25.0395L19.5952 24.4962L19.5837 24.3343C18.8207 24.4962 18.0114 24.4615 17.2253 24.2072C17.8958 24.2418 18.5663 24.1378 19.1906 23.9066C18.1617 23.3748 17.3409 22.4499 16.9594 21.2592C16.3929 19.502 16.9247 17.5714 18.3351 16.3691C16.8091 18.6234 17.364 21.6638 19.549 23.2476L19.3987 19.4904V16.5309C19.6299 16.4153 19.838 16.2419 19.9883 16.0338C20.1386 16.2419 20.3467 16.4153 20.5779 16.5309V19.4904L20.4276 23.2476C22.6125 21.6638 23.1559 18.6234 21.6414 16.3691C23.0403 17.5714 23.5836 19.502 23.0172 21.2592C22.6357 22.4499 21.8149 23.3632 20.786 23.9066ZM23.1096 23.3285C23.1096 23.317 23.1096 23.317 23.1096 23.3285C24.7859 21.0974 24.3351 17.9413 22.1154 16.2766C23.1212 16.5309 23.9883 17.1783 24.5085 18.08C25.5721 19.9182 24.9478 22.265 23.1096 23.3285Z" fill="white"/>
<path d="M19.9994 0C12.1266 0 5.32898 4.54332 2.05733 11.156H2.32323V11.3756H1.95329C1.88392 11.5144 1.82612 11.6415 1.76832 11.7803H2.6816V11.1097H2.90126V12.4045H3.30588V11.1097H3.52553V12.4045H3.93015V11.1097H4.1498V12.6242H2.67004V11.9999H1.65271C1.65271 12.0115 1.64115 12.023 1.64115 12.023V12.393H2.31166V12.6126H1.4215V12.5433C1.32901 12.786 1.23653 13.0288 1.14404 13.2831H1.37525V13.1675H4.19604V13.2831H4.50818V13.1675H7.32896V13.2831H7.6411V13.1675H10.4619V13.2831H10.774V13.1675H13.5948V13.2831H13.9069V13.1675H16.7277V13.2831H17.0399V13.1675H19.8607V13.2831H20.1728V13.1675H22.9936V13.2831H23.3057V13.1675H26.1265V13.2831H26.4386V13.1675H29.2594V13.2831H29.5716V13.1675H32.3923V13.2831H32.7045V13.1675H35.4906V13.2831H35.8027V13.1675H38.612V13.2831H38.8432C38.7507 13.0404 38.6582 12.786 38.5657 12.5433V12.6126H37.086V11.9883H36.0686V12.6589H35.8374V11.7687H37.3172V12.393H38.3461V12.023C38.3461 12.0115 38.3345 11.9999 38.3345 11.9999H37.6755V11.7803H38.2305C38.1727 11.6415 38.1033 11.5144 38.0455 11.3756H35.7912V11.156H37.9299C34.6698 4.54332 27.8722 0 19.9994 0ZM5.45615 12.6242H5.14401V12.4045H5.45615V12.6242ZM7.28272 12.6242H5.80297V11.9999H4.77407V12.6704H4.55442V11.7803H6.03418V12.4045H7.06307V11.9999H6.39256V11.7803H7.28272V12.6242V12.6242ZM4.50818 11.3756V11.156H8.57751V11.3756H4.50818ZM10.4156 12.6242H8.93589V11.9999H7.90699V12.4045H8.57751V12.6242H7.68734V11.7803H8.93589V11.1097H9.15554V12.4045H9.56016V11.1097H9.77981V12.4045H10.1844V11.1097H10.4041V12.6242H10.4156ZM11.7104 12.6242H11.3983V12.4045H11.7104V12.6242ZM13.537 12.6242H12.0572V11.9999H11.0284V12.6704H10.8087V11.7803H12.2885V12.4045H13.3174V11.9999H12.6468V11.7803H13.537V12.6242ZM10.774 11.3756V11.156H14.8434V11.3756H10.774ZM16.6699 12.6242H15.1902V11.9999H14.1613V12.4045H14.8318V12.6242H13.9416V11.7803H15.1902V11.1097H15.4098V12.4045H15.8144V11.1097H16.0341V12.4045H16.4387V11.1097H16.6584V12.6242H16.6699ZM17.9647 12.6242H17.6526V12.4045H17.9647V12.6242ZM19.8029 12.6242H18.3231V11.9999H17.2942V12.6704H17.0746V11.7803H18.5543V12.4045H19.5832V11.9999H18.9127V11.7803H19.8029V12.6242ZM17.0283 11.3756V11.156H21.0976V11.3756H17.0283ZM22.9242 12.6242H21.4445V11.9999H20.4156V12.4045H21.0861V12.6242H20.1959V11.7803H21.4445V11.1097H21.6641V12.4045H22.0687V11.1097H22.2884V12.4045H22.693V11.1097H22.9127V12.6242H22.9242ZM24.219 12.6242H23.9069V12.4045H24.219V12.6242ZM26.0571 12.6242H24.5774V11.9999H23.5485V12.6704H23.3288V11.7803H24.8086V12.4045H25.8375V11.9999H25.167V11.7803H26.0571V12.6242ZM23.2826 11.3756V11.156H27.3519V11.3756H23.2826ZM29.1785 12.6242H27.6987V11.9999H26.6699V12.4045H27.3404V12.6242H26.4502V11.7803H27.6987V11.1097H27.9184V12.4045H28.323V11.1097H28.5427V12.4045H28.9473V11.1097H29.1669V12.6242H29.1785ZM36.427 12.4045H36.7391V12.6242H36.427V12.4045ZM30.4849 12.6242H30.1727V12.4045H30.4849V12.6242ZM32.3114 12.6242H30.8317V11.9999H29.8028V12.6704H29.5831V11.7803H31.0629V12.4045H32.0918V11.9999H31.4213V11.7803H32.3114V12.6242ZM29.5369 11.3756V11.156H33.6062V11.3756H29.5369ZM34.5889 12.4045V11.1097H34.8085V12.4045H35.2131V11.1097H35.4328V12.6242H33.953V11.9999H32.9241V12.4045H33.5947V12.6242H32.716V11.7803H33.9646V11.1097H34.1842V12.4045H34.5889V12.4045Z" fill="#239F40"/>
<path d="M2.3238 11.1553H2.0579C2.02322 11.2246 1.98854 11.3056 1.95386 11.3749H2.3238V11.1553V11.1553Z" fill="white"/>
<path d="M2.32425 12.6246V12.4049H1.65373V12.0234C1.57281 12.1968 1.50345 12.3818 1.43408 12.5552V12.6246H2.32425Z" fill="white"/>
<path d="M2.68168 12.6248H4.16143V11.1104H3.93022V12.4051H3.5256V11.1104H3.30595V12.4051H2.90133V11.1104H2.68168V11.7809H1.76839C1.73371 11.8502 1.69902 11.9312 1.6759 12.0005H2.69324V12.6248H2.68168Z" fill="white"/>
<path d="M4.19631 13.4109V13.2953V13.1797H1.38708V13.2953V13.4109H4.19631Z" fill="white"/>
<path d="M4.19631 26.8206V26.705V26.5894H1.38708V26.705V26.8206H4.19631Z" fill="white"/>
<path d="M2.32341 27.3755H1.39856C1.43324 27.4449 1.45636 27.5258 1.49104 27.5951H2.32341V27.3755Z" fill="white"/>
<path d="M2.3238 28.624H1.95386C1.98854 28.6934 2.02322 28.7743 2.0579 28.8437H2.3238V28.624V28.624Z" fill="white"/>
<path d="M2.68213 28.844H4.16189V27.3296H3.93067V28.6244H3.52605V27.3296H3.3064V28.6244H2.90178V27.3296H2.68213V28.0001H1.66479C1.69948 28.0695 1.73416 28.1504 1.75728 28.2198H2.67057V28.844H2.68213Z" fill="white"/>
<path d="M8.57763 11.1553H4.5083V11.3749H8.57763V11.1553Z" fill="white"/>
<path d="M10.1847 12.4051H9.79165V11.1104H9.56044V12.4051H9.16738V11.1104H8.93617V11.7809H7.68762V12.6248H8.57779V12.4051H7.90727V12.0005H8.93617V12.6248H10.4159V11.1104H10.1847V12.4051Z" fill="white"/>
<path d="M6.39307 11.9994H7.06358V12.4041H6.03469V11.7798H4.55493V12.67H4.78614V11.9994H5.81504V12.6237H7.28323V11.7798H6.39307V11.9994Z" fill="white"/>
<path d="M5.45691 12.4048H5.14478V12.6244H5.45691V12.4048Z" fill="white"/>
<path d="M7.32909 13.4109V13.2953V13.1797H4.5083V13.2953V13.4109H7.32909Z" fill="white"/>
<path d="M10.4624 13.4109V13.2953V13.1797H7.6416V13.2953V13.4109H10.4624Z" fill="white"/>
<path d="M7.32909 26.8206V26.705V26.5894H4.5083V26.705V26.8206H7.32909Z" fill="white"/>
<path d="M10.4624 26.8206V26.705V26.5894H7.6416V26.705V26.8206H10.4624Z" fill="white"/>
<path d="M5.45691 28.624H5.14478V28.8437H5.45691V28.624Z" fill="white"/>
<path d="M6.39307 28.2192H7.06358V28.6238H6.03469V27.9995H4.55493V28.8897H4.78614V28.2192H5.81504V28.8434H7.28323V27.9995H6.39307V28.2192Z" fill="white"/>
<path d="M10.1847 28.6244H9.79165V27.3296H9.56044V28.6244H9.16738V27.3296H8.93617V28.0001H7.68762V28.844H8.57779V28.6244H7.90727V28.2198H8.93617V28.844H10.4159V27.3296H10.1847V28.6244Z" fill="white"/>
<path d="M8.57763 27.3755H4.5083V27.5951H8.57763V27.3755Z" fill="white"/>
<path d="M12.6475 11.9994H13.318V12.4041H12.2891V11.7798H10.8209V12.67H11.0406V11.9994H12.0695V12.6237H13.5377V11.7798H12.6475V11.9994Z" fill="white"/>
<path d="M16.4508 12.4051H16.0462V11.1104H15.8265V12.4051H15.4219V11.1104H15.1907V11.7809H13.9421V12.6248H14.8323V12.4051H14.1618V12.0005H15.1907V12.6248H16.6704V11.1104H16.4508V12.4051Z" fill="white"/>
<path d="M11.7107 12.4048H11.3986V12.6244H11.7107V12.4048Z" fill="white"/>
<path d="M14.844 11.1553H10.7747V11.3749H14.844V11.1553Z" fill="white"/>
<path d="M16.7167 13.4109V13.2953V13.1797H13.8959V13.2953V13.4109H16.7167Z" fill="white"/>
<path d="M13.5839 13.4109V13.2953V13.1797H10.7747V13.2953V13.4109H13.5839Z" fill="white"/>
<path d="M16.7167 26.8206V26.705V26.5894H13.8959V26.705V26.8206H16.7167Z" fill="white"/>
<path d="M13.5839 26.8206V26.705V26.5894H10.7747V26.705V26.8206H13.5839Z" fill="white"/>
<path d="M11.7107 28.624H11.3986V28.8437H11.7107V28.624Z" fill="white"/>
<path d="M14.844 27.3755H10.7747V27.5951H14.844V27.3755Z" fill="white"/>
<path d="M16.4508 28.6244H16.0462V27.3296H15.8265V28.6244H15.4219V27.3296H15.1907V28.0001H13.9421V28.844H14.8323V28.6244H14.1618V28.2198H15.1907V28.844H16.6704V27.3296H16.4508V28.6244Z" fill="white"/>
<path d="M12.6475 28.2192H13.318V28.6238H12.2891V27.9995H10.8209V28.8897H11.0406V28.2192H12.0695V28.8434H13.5377V27.9995H12.6475V28.2192Z" fill="white"/>
<path d="M21.0984 11.1553H17.0291V11.3749H21.0984V11.1553Z" fill="white"/>
<path d="M18.9015 11.9994H19.572V12.4041H18.5431V11.7798H17.075V12.67H17.2946V11.9994H18.3235V12.6237H19.8033V11.7798H18.9015V11.9994Z" fill="white"/>
<path d="M22.7047 12.4051H22.3001V11.1104H22.0804V12.4051H21.6758V11.1104H21.4561V11.7809H20.196V12.6248H21.0978V12.4051H20.4273V12.0005H21.4561V12.6248H22.9243V11.1104H22.7047V12.4051Z" fill="white"/>
<path d="M17.9648 12.4048H17.6527V12.6244H17.9648V12.4048Z" fill="white"/>
<path d="M22.971 13.4109V13.2953V13.1797H20.1617V13.2953V13.4109H22.971Z" fill="white"/>
<path d="M19.8383 13.4109V13.2953V13.1797H17.0291V13.2953V13.4109H19.8383Z" fill="white"/>
<path d="M22.971 26.8206V26.705V26.5894H20.1617V26.705V26.8206H22.971Z" fill="white"/>
<path d="M19.8383 26.8206V26.705V26.5894H17.0291V26.705V26.8206H19.8383Z" fill="white"/>
<path d="M17.9648 28.624H17.6527V28.8437H17.9648V28.624Z" fill="white"/>
<path d="M18.9015 28.2192H19.572V28.6238H18.5431V27.9995H17.075V28.8897H17.2946V28.2192H18.3235V28.8434H19.8033V27.9995H18.9015V28.2192Z" fill="white"/>
<path d="M22.7047 28.6244H22.3001V27.3296H22.0804V28.6244H21.6758V27.3296H21.4561V28.0001H20.196V28.844H21.0978V28.6244H20.4273V28.2198H21.4561V28.844H22.9243V27.3296H22.7047V28.6244Z" fill="white"/>
<path d="M21.0984 27.3755H17.0291V27.5951H21.0984V27.3755Z" fill="white"/>
<path d="M24.2194 12.4048H23.9072V12.6244H24.2194V12.4048Z" fill="white"/>
<path d="M28.9597 12.4051H28.5551V11.1104H28.3355V12.4051H27.9308V11.1104H27.7112V11.7809H26.4626V12.6248H27.3528V12.4051H26.6823V12.0005H27.7112V12.6248H29.1794V11.1104H28.9597V12.4051Z" fill="white"/>
<path d="M25.1675 11.9994H25.838V12.4041H24.8091V11.7798H23.3293V12.67H23.549V11.9994H24.5779V12.6237H26.0576V11.7798H25.1675V11.9994Z" fill="white"/>
<path d="M27.352 11.1553H23.2827V11.3749H27.352V11.1553Z" fill="white"/>
<path d="M29.225 13.4109V13.2953V13.1797H26.4158V13.2953V13.4109H29.225Z" fill="white"/>
<path d="M26.1035 13.4109V13.2953V13.1797H23.2827V13.2953V13.4109H26.1035Z" fill="white"/>
<path d="M29.225 26.8206V26.705V26.5894H26.4158V26.705V26.8206H29.225Z" fill="white"/>
<path d="M26.1035 26.8206V26.705V26.5894H23.2827V26.705V26.8206H26.1035Z" fill="white"/>
<path d="M25.1675 28.2192H25.838V28.6238H24.8091V27.9995H23.3293V28.8897H23.549V28.2192H24.5779V28.8434H26.0576V27.9995H25.1675V28.2192Z" fill="white"/>
<path d="M28.9597 28.6244H28.5551V27.3296H28.3355V28.6244H27.9308V27.3296H27.7112V28.0001H26.4626V28.844H27.3528V28.6244H26.6823V28.2198H27.7112V28.844H29.1794V27.3296H28.9597V28.6244Z" fill="white"/>
<path d="M24.2194 28.624H23.9072V28.8437H24.2194V28.624Z" fill="white"/>
<path d="M27.352 27.3755H23.2827V27.5951H27.352V27.3755Z" fill="white"/>
<path d="M33.6064 11.1553H29.5371V11.3749H33.6064V11.1553Z" fill="white"/>
<path d="M31.422 11.9994H32.0925V12.4041H31.0636V11.7798H29.5839V12.67H29.8151V11.9994H30.8324V12.6237H32.3122V11.7798H31.422V11.9994Z" fill="white"/>
<path d="M33.9649 11.1104V11.7809H32.7163V12.6248H33.6065V12.4051H32.936V12.0005H33.9649V12.6248H35.4446V11.1104H35.2134V12.4051H34.8203V11.1104H34.5891V12.4051H34.1845V11.1104H33.9649Z" fill="white"/>
<path d="M30.4739 12.4048H30.1617V12.6244H30.4739V12.4048Z" fill="white"/>
<path d="M35.4911 13.4109V13.2953V13.1797H32.6703V13.2953V13.4109H35.4911Z" fill="white"/>
<path d="M32.3579 13.4109V13.2953V13.1797H29.5371V13.2953V13.4109H32.3579Z" fill="white"/>
<path d="M32.3579 26.8206V26.705V26.5894H29.5371V26.705V26.8206H32.3579Z" fill="white"/>
<path d="M35.4911 26.8206V26.705V26.5894H32.6703V26.705V26.8206H35.4911Z" fill="white"/>
<path d="M30.4739 28.624H30.1617V28.8437H30.4739V28.624Z" fill="white"/>
<path d="M35.2134 28.6244H34.8203V27.3296H34.5891V28.6244H34.1845V27.3296H33.9649V28.0001H32.7163V28.844H33.6065V28.6244H32.936V28.2198H33.9649V28.844H35.4446V27.3296H35.2134V28.6244Z" fill="white"/>
<path d="M33.6064 27.3755H29.5371V27.5951H33.6064V27.3755Z" fill="white"/>
<path d="M31.422 28.2192H32.0925V28.6238H31.0636V27.9995H29.5839V28.8897H29.8151V28.2192H30.8324V28.8434H32.3122V27.9995H31.422V28.2192Z" fill="white"/>
<path d="M37.676 11.9994H38.335C38.3003 11.9301 38.2656 11.8491 38.2425 11.7798H37.6876V11.9994H37.676Z" fill="white"/>
<path d="M37.3179 12.4041V11.7798H35.8381V12.67H36.0578V11.9994H37.0867V12.6237H38.5664V12.5543C38.4971 12.3694 38.4162 12.196 38.3468 12.0226V12.3925H37.3179V12.4041Z" fill="white"/>
<path d="M35.8035 11.3749H38.0578C38.0231 11.3056 37.9884 11.2246 37.9537 11.1553H35.815V11.3749H35.8035Z" fill="white"/>
<path d="M36.7393 12.4048H36.4271V12.6244H36.7393V12.4048Z" fill="white"/>
<path d="M38.6127 13.4109V13.2953V13.1797H35.8035V13.2953V13.4109H38.6127Z" fill="white"/>
<path d="M38.6127 26.8206V26.705V26.5894H35.8035V26.705V26.8206H38.6127Z" fill="white"/>
<path d="M36.7393 28.624H36.4271V28.8437H36.7393V28.624Z" fill="white"/>
<path d="M37.6762 28.2192H38.2311C38.2658 28.1498 38.3005 28.0689 38.3236 27.9995H37.6647V28.2192H37.6762Z" fill="white"/>
<path d="M35.8035 27.5951H38.5086C38.5433 27.5258 38.5665 27.4449 38.6011 27.3755H35.8035V27.5951Z" fill="white"/>
<path d="M37.3179 27.9995H35.8381V28.8897H36.0578V28.2192H37.0867V28.8434H37.9306C37.9653 28.7741 38 28.6931 38.0346 28.6238H37.3063V27.9995H37.3179Z" fill="white"/>
<path d="M19.2135 23.9072C18.5892 24.1384 17.9187 24.2425 17.2482 24.2078C18.0343 24.4621 18.8435 24.4968 19.6065 24.335L19.595 24.0806C19.4678 24.0344 19.3406 23.965 19.2135 23.9072Z" fill="#DA0000"/>
<path d="M21.6528 16.3696C23.1788 18.6239 22.6238 21.6644 20.4389 23.2482L20.4158 23.7569C20.5314 23.8147 20.6585 23.8609 20.7857 23.9071C21.8146 23.3754 22.6354 22.4505 23.0169 21.2598C23.5949 19.5026 23.0516 17.5719 21.6528 16.3696Z" fill="#DA0000"/>
<path d="M22.1152 16.2773C24.3349 17.9421 24.7857 21.0981 23.1094 23.3178C23.1094 23.3178 23.1094 23.3293 23.0979 23.3293C24.936 22.2657 25.5603 19.9189 24.4967 18.0808C23.9881 17.1791 23.1326 16.5317 22.1152 16.2773Z" fill="#DA0000"/>
<path d="M20.0691 23.572C20.1847 23.6298 20.3003 23.6992 20.4159 23.7454L20.4391 23.2368L20.5893 19.4796V16.5201C20.3581 16.4044 20.15 16.231 19.9998 16.0229L20.2541 19.9767L20.0691 23.572Z" fill="#DA0000"/>
<path d="M19.9998 25.0286L20.3928 24.4853L20.4044 24.3234C20.2888 24.3003 20.1616 24.2656 20.046 24.231L19.9998 25.0286Z" fill="#DA0000"/>
<path d="M19.9998 15.8142C20.231 16.1379 20.6818 16.2189 21.0055 15.9877C21.283 15.7911 21.387 15.4327 21.2599 15.1206C21.1905 15.4905 20.8321 15.7333 20.4622 15.664C20.2656 15.6293 20.0922 15.5021 19.9998 15.3287L20.1038 15.6986L19.9998 15.8142Z" fill="#DA0000"/>
<path d="M19.5602 23.2482C17.3753 21.6644 16.8319 18.6239 18.3464 16.3696C16.9475 17.5719 16.4042 19.5026 16.9707 21.2598C17.3522 22.4505 18.1845 23.3638 19.2019 23.9071C19.329 23.9765 19.4562 24.0343 19.5834 24.0805L19.5602 23.2482Z" fill="#DA0000"/>
<path d="M20.0692 23.5723L20.0345 24.2312C20.1502 24.2659 20.2773 24.3006 20.3929 24.3237C21.1559 24.4856 21.9652 24.4509 22.7513 24.1965C22.0808 24.2312 21.4103 24.1272 20.786 23.896C20.6588 23.8497 20.5432 23.8035 20.416 23.7457C20.3004 23.6994 20.1848 23.6416 20.0692 23.5723Z" fill="#DA0000"/>
<path d="M17.8843 16.2773C16.8785 16.5317 16.0115 17.1791 15.4912 18.0808C14.4277 19.9189 15.0635 22.2657 16.8901 23.3293C16.8901 23.3293 16.8901 23.3178 16.8785 23.3178C15.2138 21.0981 15.6647 17.9421 17.8843 16.2773Z" fill="#DA0000"/>
<path d="M20.0693 23.5718L20.2427 19.9996L19.9884 16.0459C19.8381 16.254 19.63 16.4274 19.3988 16.543V19.5025L19.5491 23.2597L19.5838 24.0921L19.5953 24.3464L19.6069 24.5083L20 25.0516L20.0346 24.2655L20.0693 23.5718Z" fill="#DA0000"/>
<path d="M18.9942 16.0002C19.3179 16.2314 19.7803 16.1505 20 15.8268L20.104 15.7343L20 15.3643C19.8959 15.5377 19.7341 15.6534 19.5376 15.6996C19.1676 15.769 18.8092 15.5262 18.7399 15.1562C18.6127 15.4453 18.7168 15.8036 18.9942 16.0002Z" fill="#DA0000"/>
                                      </svg>
                                      <div class="flex flex-col">
                                        <span class="">تومان</span>
                                        <span class="text-xs text-center"
                                          >TomanTMN</span
                                        >
                                      </div>
                                    </div>
                                    <!-- end icon-->
                                    <div class="flex">
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M16.6 6.4585L11.1667 11.8918C10.525 12.5335 9.47502 12.5335 8.83336 11.8918L3.40002 6.4585"
                                          stroke="#A8A8A8"
                                          stroke-width="1.5"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    class="rounded-full bg-black text-white text-center dark:bg-slate-600 w-[275px] focus:outline-none"
                                  />
                                </div>
                              </div>
                              <transition
                                enter-active-class="transform transition duration-500 ease-custom"
                                enter-from-class="-translate-y-1/2 scale-y-0 opacity-0"
                                enter-to-class="translate-y-0 scale-y-100 opacity-100"
                                leave-active-class="transform transition duration-300 ease-custom"
                                leave-class="translate-y-0 scale-y-100 opacity-100"
                                leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
                              >
                                <div
                                @click="isOptionsExpanded1 = !isOptionsExpanded1"
                                  v-show="isOptionsExpanded1"
                                  class="absolute mt-2 w-48 bg-white rounded-2xl shadow-2xl overflow-hidden text-black z-20 cursor-pointer dark:bg-slate-600 dark:text-white"
                                >
                                  <div
                                    class="flex items-center space-s-2 border-b p-2 dark:border-slate-500"
                                  >
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="0 0 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        width="50"
                                        height="50"
                                        rx="15"
                                        fill="#E1FFF7"
                                      />
                                      <circle
                                        cx="25"
                                        cy="24"
                                        r="13"
                                        fill="#00BE91"
                                      />
                                      <path
                                        d="M30 19.6875H20C19.4875 19.6875 19.0625 20.1125 19.0625 20.625C19.0625 21.1375 19.4875 21.5625 20 21.5625H24.0625V28.125C24.0625 28.6375 24.4875 29.0625 25 29.0625C25.5125 29.0625 25.9375 28.6375 25.9375 28.125V21.5625H30C30.5125 21.5625 30.9375 21.1375 30.9375 20.625C30.9375 20.1125 30.5125 19.6875 30 19.6875Z"
                                        fill="white"
                                      />
                                    </svg>  
                                    <div class="flex flex-col mt-2">
                                      <span class="text-sm">تتر</span>
                                      <span class="text-xs">Tether</span>
                                    </div>
                                  </div>
                                  <div
                                    class="flex items-center space-s-2 border-b p-2 dark:border-slate-500"
                                  >
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="0 0 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                      <rect
                                        width="50"
                                        height="50"
                                        rx="15"
                                        fill="#F01010"
                                        fill-opacity="0.1"
                                      />
                                      <rect
                                        x="12"
                                        y="11"
                                        width="26"
                                        height="26"
                                        fill="url(#pattern0)"
                                      />
                                      <defs>
                                        <pattern
                                          id="pattern0"
                                          patternContentUnits="objectBoundingBox"
                                          width="1"
                                          height="1"
                                        >
                                          <use
                                            xlink:href="#image0_622_2207"
                                            transform="scale(0.00142857)"
                                          />
                                        </pattern>
                                        <image
                                          id="image0_622_2207"
                                          width="700"
                                          height="700"
                                          xlink:href="data:image/png;base64,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"
                                        />
                                      </defs>
                                    </svg>
                                    <div class="flex flex-col mt-2">
                                      <span class="text-sm">پرفکت مانی</span>
                                      <span class="text-xs">Perfect Money</span>
                                    </div>
                                  </div>
                                  <div class="flex items-center space-s-2 p-2">
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="0 0 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                      <rect
                                        width="50"
                                        height="50"
                                        rx="15"
                                        fill="#F01010"
                                        fill-opacity="0.1"
                                      />
                                      <rect
                                        x="12"
                                        y="11"
                                        width="26"
                                        height="26"
                                        fill="url(#pattern0)"
                                      />
                                      <defs>
                                        <pattern
                                          id="pattern0"
                                          patternContentUnits="objectBoundingBox"
                                          width="1"
                                          height="1"
                                        >
                                          <use
                                            xlink:href="#image0_622_2207"
                                            transform="scale(0.00142857)"
                                          />
                                        </pattern>
                                        <image
                                          id="image0_622_2207"
                                          width="700"
                                          height="700"
                                          xlink:href="data:image/png;base64,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"
                                        />
                                      </defs>
                                    </svg>
                                    <div class="flex flex-col mt-2">
                                      <span class="text-sm"
                                        >ووچر پرفکت مانی</span
                                      >
                                      <span class="text-xs">Perfect Money</span>
                                    </div>
                                  </div>
                                </div>
                              </transition>
                            </div>
                          </div>
                        </div>
                        <!-- toman-->
                        <!-- end toman-->
                      </div>
                    </div>
                    <!-- end price-->
                    <!-- resid-->
                    <div class="">
                      <div
                        class="bg-gray-100 border dark:border-gray-700 text-gray-600 p-4 w-full rounded-xl mt-2 dark:bg-slate-800 dark:text-white lg:"
                      >
                        <div class="space-y-2">
                          <!-- col1 -->
                          <div class="flex justify-between">
                            <span class="">مقدار پرداختی :</span>
                            <div class="flex space-s-2 items-center">
                              <span class="font-bold text-emerald-500"
                                >0.14024</span
                              >
                              <span class="font-bold">تتر</span>
                              <!-- icon -->
                              <div>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10"
                                    cy="10"
                                    r="10"
                                    fill="#00BE91"
                                  />
                                  <path
                                    d="M13.8462 6.68262H6.15389C5.75966 6.68262 5.43274 7.00954 5.43274 7.40377C5.43274 7.798 5.75966 8.12492 6.15389 8.12492H9.27889V13.173C9.27889 13.5672 9.60582 13.8942 10 13.8942C10.3943 13.8942 10.7212 13.5672 10.7212 13.173V8.12492H13.8462C14.2404 8.12492 14.5674 7.798 14.5674 7.40377C14.5674 7.00954 14.2404 6.68262 13.8462 6.68262Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <!-- end icon -->
                            </div>
                          </div>
                          <!-- endcol1 -->
                          <!-- col2 -->
                          <div
                            class="flex justify-between border-b border-[gray-300] items-center py-2 dark:border-b dark:border-b-slate-600"
                          >
                            <span class="">مقدار دریافتی :</span>
                            <div class="flex space-s-2 items-center">
                              <span class="font-bold text-emerald-500"
                                >0.14024</span
                              >
                              <p class="font-bold">تومان</p>
                              <!-- icon -->
                              <div>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19.306 13.4103H17.8957V13.3525H17.7454V13.4103H16.335V13.3525H16.1789V13.4103H14.7685V13.3525H14.6125V13.4103H13.2021V13.3525H13.046V13.4103H11.6356V13.3525H11.4796V13.4103H10.0692V13.3525H9.91312V13.4103H8.50274V13.3525H8.34667V13.4103H6.93629V13.3525H6.78022V13.4103H5.36984V13.3525H5.21377V13.4103H3.80339V13.3525H3.64732V13.4103H2.25428V13.3525H2.09821V13.4103H0.693608V13.3525H0.578003C0.618465 13.4624 0.658926 13.578 0.705168 13.6878H1.16759V13.7976H0.751411C0.780312 13.867 0.809213 13.9306 0.838115 13.9999H1.34678V13.6647H1.4566V14.3121H1.65891V13.6647H1.76874V14.3121H1.97105V13.6647H2.08087V14.4219H1.341V14.1098H0.884357C0.913258 14.1791 0.947939 14.2427 0.97684 14.3121H1.16181V14.4219H1.02886C2.66468 17.7282 6.06347 19.9998 9.99982 19.9998C13.9362 19.9998 17.335 17.7282 18.9708 14.4219H18.5488V14.1098H18.0344V14.445H17.9188V13.9999H18.6586V14.3121H19.0228C19.0575 14.2427 19.0864 14.1791 19.1153 14.1098H18.8378V13.9999H19.1673C19.1962 13.9306 19.2251 13.867 19.254 13.7976H17.9014V13.6878H19.3003C19.3465 13.578 19.387 13.4624 19.4274 13.3525H19.3118V13.4103H19.306ZM2.25428 13.6878H4.28893V13.7976H2.25428V13.6878ZM2.72826 14.4219H2.57219V14.3121H2.72826V14.4219ZM3.64154 14.4219H2.90167V14.1098H2.38722V14.445H2.2774V13.9999H3.01727V14.3121H3.53172V14.1098H3.19646V13.9999H3.64154V14.4219ZM5.20799 14.4219H4.46812V14.1098H3.95367V14.3121H4.28893V14.4219H3.84385V13.9999H4.46812V13.6647H4.57794V14.3121H4.78025V13.6647H4.89008V14.3121H5.09238V13.6647H5.20221V14.4219H5.20799ZM5.38718 13.6878H7.42183V13.7976H5.38718V13.6878ZM5.85538 14.4219H5.69931V14.3121H5.85538V14.4219ZM6.76866 14.4219H6.02879V14.1098H5.51434V14.445H5.40452V13.9999H6.14439V14.3121H6.65883V14.1098H6.32358V13.9999H6.76866V14.4219ZM8.33511 14.4219H7.59524V14.1098H7.08079V14.3121H7.41605V14.4219H6.97097V13.9999H7.59524V13.6647H7.70506V14.3121H7.90737V13.6647H8.0172V14.3121H8.2195V13.6647H8.32933V14.4219H8.33511ZM8.9825 14.4219H8.82643V14.3121H8.9825V14.4219ZM9.90156 14.4219H9.16169V14.1098H8.64724V14.445H8.53742V13.9999H9.27729V14.3121H9.79173V14.1098H9.45648V13.9999H9.90156V14.4219ZM8.5143 13.7976V13.6878H10.5489V13.7976H8.5143ZM11.4622 14.4219H10.7224V14.1098H10.2079V14.3121H10.5432V14.4219H10.0981V13.9999H10.7224V13.6647H10.8322V14.3121H11.0345V13.6647H11.1443V14.3121H11.3466V13.6647H11.4564V14.4219H11.4622ZM11.6414 13.6878H13.6761V13.7976H11.6414V13.6878ZM12.1096 14.4219H11.9536V14.3121H12.1096V14.4219ZM13.0287 14.4219H12.2888V14.1098H11.7744V14.445H11.6645V13.9999H12.4044V14.3121H12.9189V14.1098H12.5836V13.9999H13.0287V14.4219ZM14.5893 14.4219H13.8495V14.1098H13.335V14.3121H13.6703V14.4219H13.2252V13.9999H13.8495V13.6647H13.9593V14.3121H14.1616V13.6647H14.2714V14.3121H14.4737V13.6647H14.5836V14.4219H14.5893ZM14.7685 13.6878H16.8032V13.7976H14.7685V13.6878ZM15.2425 14.4219H15.0865V14.3121H15.2425V14.4219ZM16.1558 14.4219H15.4159V14.1098H14.9015V14.445H14.7917V13.9999H15.5315V14.3121H16.046V14.1098H15.7107V13.9999H16.1558V14.4219ZM17.7222 14.4219H16.9824V14.1098H16.4679V14.3121H16.8032V14.4219H16.3581V13.9999H16.9824V13.6647H17.0922V14.3121H17.2945V13.6647H17.4043V14.3121H17.6066V13.6647H17.7165V14.4219H17.7222ZM18.2136 14.3121H18.3696V14.4219H18.2136V14.3121Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M19.3061 6.70478H17.8957V6.64697H17.7454V6.70478H16.335V6.64697H16.1789V6.70478H14.7686V6.64697H14.6125V6.70478H13.2021V6.64697H13.046V6.70478H11.6357V6.64697H11.4796V6.70478H10.0692V6.64697H9.91314V6.70478H8.50276V6.64697H8.34669V6.70478H6.93631V6.64697H6.78024V6.70478H5.36986V6.64697H5.21379V6.70478H3.80341V6.64697H3.64734V6.70478H2.2543V6.64697H2.09823V6.70478H0.693631V6.64697H0.578026C0.208089 7.6932 0 8.82035 0 9.99952C0 11.1787 0.202309 12.3058 0.578026 13.3521H0.693631V13.2943H2.10401V13.3521H2.26008V13.2943H3.67046V13.3521H3.82653V13.2943H5.23691V13.3521H5.39298V13.2943H6.80336V13.3521H6.95943V13.2943H8.36981V13.3521H8.52588V13.2943H9.93626V13.3521H10.0923V13.2943H11.5027V13.3521H11.6588V13.2943H13.0692V13.3521H13.2252V13.2943H14.6356V13.3521H14.7917V13.2943H16.2021V13.3521H16.3581V13.2943H17.7454V13.3521H17.9015V13.2943H19.3061V13.3521H19.4217C19.7916 12.3058 19.9997 11.1787 19.9997 9.99952C19.9997 8.82035 19.7974 7.6932 19.4217 6.64697H19.3061V6.70478ZM9.36402 7.56603C9.3987 7.751 9.57789 7.87239 9.76286 7.83771C9.86112 7.82037 9.94782 7.75678 9.99407 7.67008C10.0461 7.75678 10.127 7.81459 10.2253 7.83771C10.4102 7.87239 10.5894 7.751 10.6241 7.56603C10.6877 7.7221 10.6357 7.90129 10.4969 7.99955C10.3351 8.11516 10.1039 8.0747 9.99407 7.91285C9.87846 8.0747 9.65303 8.11516 9.49118 7.99955C9.35824 7.90129 9.30622 7.7221 9.36402 7.56603ZM7.74555 9.04C8.00566 8.58914 8.43918 8.26545 8.94206 8.13828C7.83225 8.97064 7.60682 10.5486 8.44496 11.6585C8.44496 11.6585 8.44496 11.6642 8.45074 11.6642C7.5259 11.1325 7.21376 9.95906 7.74555 9.04ZM10.3929 11.9532C10.705 12.0689 11.0403 12.1209 11.3755 12.1035C10.9825 12.2307 10.5779 12.248 10.1964 12.1671L10.1906 12.248L9.99407 12.5197L9.79754 12.248L9.79176 12.1671C9.41026 12.248 9.00564 12.2307 8.61258 12.1035C8.94784 12.1209 9.28309 12.0689 9.59523 11.9532C9.08079 11.6874 8.67039 11.2249 8.47964 10.6296C8.19641 9.75097 8.4623 8.78567 9.16749 8.18452C8.4045 9.31167 8.68195 10.8319 9.77442 11.6238L9.69927 9.74519V8.26545C9.81488 8.20764 9.91892 8.12094 9.99407 8.01689C10.0692 8.12094 10.1733 8.20764 10.2889 8.26545V9.74519L10.2137 11.6238C11.3062 10.8319 11.5779 9.31167 10.8206 8.18452C11.5201 8.78567 11.7917 9.75097 11.5085 10.6296C11.3177 11.2249 10.9073 11.6816 10.3929 11.9532ZM11.5547 11.6642C11.5547 11.6585 11.5547 11.6585 11.5547 11.6642C12.3929 10.5486 12.1674 8.97064 11.0576 8.13828C11.5605 8.26545 11.994 8.58914 12.2541 9.04C12.7859 9.95906 12.4738 11.1325 11.5547 11.6642Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M9.99962 0C6.06327 0 2.66448 2.27164 1.02866 5.57795H1.16161V5.68777H0.97664C0.941958 5.75714 0.913057 5.82072 0.884156 5.89008H1.3408V5.55483H1.45062V6.20222H1.65293V5.55483H1.76275V6.20222H1.96506V5.55483H2.07489V6.31204H1.33502V5.99991H0.826353C0.826353 6.00569 0.820573 6.01147 0.820573 6.01147V6.19644H1.15583V6.30626H0.710748V6.27158C0.664506 6.39296 0.618264 6.51435 0.572021 6.64152H0.687627V6.58371H2.09801V6.64152H2.25408V6.58371H3.66446V6.64152H3.82053V6.58371H5.23091V6.64152H5.38698V6.58371H6.79736V6.64152H6.95343V6.58371H8.36381V6.64152H8.51988V6.58371H9.93026V6.64152H10.0863V6.58371H11.4967V6.64152H11.6528V6.58371H13.0632V6.64152H13.2192V6.58371H14.6296V6.64152H14.7857V6.58371H16.1961V6.64152H16.3521V6.58371H17.7452V6.64152H17.9012V6.58371H19.3058V6.64152H19.4214C19.3752 6.52013 19.329 6.39296 19.2827 6.27158V6.30626H18.5428V5.99413H18.0342V6.32938H17.9186V5.8843H18.6584V6.19644H19.1729V6.01147C19.1729 6.00569 19.1671 5.99991 19.1671 5.99991H18.8376V5.89008H19.1151C19.0862 5.82072 19.0515 5.75714 19.0226 5.68777H17.8955V5.57795H18.9648C17.3348 2.27164 13.936 0 9.99962 0ZM2.72806 6.31204H2.57199V6.20222H2.72806V6.31204ZM3.64134 6.31204H2.90147V5.99991H2.38702V6.33516H2.2772V5.89008H3.01707V6.20222H3.53151V5.99991H3.19626V5.89008H3.64134V6.31204ZM2.25408 5.68777V5.57795H4.28873V5.68777H2.25408ZM5.20779 6.31204H4.46791V5.99991H3.95347V6.20222H4.28873V6.31204H3.84365V5.89008H4.46791V5.55483H4.57774V6.20222H4.78005V5.55483H4.88987V6.20222H5.09218V5.55483H5.20201V6.31204H5.20779ZM5.85518 6.31204H5.69911V6.20222H5.85518V6.31204ZM6.76846 6.31204H6.02858V5.99991H5.51414V6.33516H5.40432V5.89008H6.14419V6.20222H6.65863V5.99991H6.32338V5.89008H6.76846V6.31204ZM5.38698 5.68777V5.57795H7.42163V5.68777H5.38698ZM8.33491 6.31204H7.59503V5.99991H7.08059V6.20222H7.41585V6.31204H6.97077V5.89008H7.59503V5.55483H7.70486V6.20222H7.90717V5.55483H8.01699V6.20222H8.2193V5.55483H8.32913V6.31204H8.33491ZM8.9823 6.31204H8.82623V6.20222H8.9823V6.31204ZM9.90136 6.31204H9.16148V5.99991H8.64704V6.33516H8.53722V5.89008H9.27709V6.20222H9.79153V5.99991H9.45628V5.89008H9.90136V6.31204ZM8.5141 5.68777V5.57795H10.5487V5.68777H8.5141ZM11.462 6.31204H10.7222V5.99991H10.2077V6.20222H10.543V6.31204H10.0979V5.89008H10.7222V5.55483H10.832V6.20222H11.0343V5.55483H11.1441V6.20222H11.3464V5.55483H11.4562V6.31204H11.462ZM12.1094 6.31204H11.9533V6.20222H12.1094V6.31204ZM13.0285 6.31204H12.2886V5.99991H11.7742V6.33516H11.6643V5.89008H12.4042V6.20222H12.9187V5.99991H12.5834V5.89008H13.0285V6.31204ZM11.6412 5.68777V5.57795H13.6759V5.68777H11.6412ZM14.5891 6.31204H13.8493V5.99991H13.3348V6.20222H13.6701V6.31204H13.225V5.89008H13.8493V5.55483H13.9591V6.20222H14.1614V5.55483H14.2712V6.20222H14.4735V5.55483H14.5834V6.31204H14.5891ZM18.2134 6.20222H18.3694V6.31204H18.2134V6.20222ZM15.2423 6.31204H15.0862V6.20222H15.2423V6.31204ZM16.1556 6.31204H15.4157V5.99991H14.9013V6.33516H14.7915V5.89008H15.5313V6.20222H16.0458V5.99991H15.7105V5.89008H16.1556V6.31204ZM14.7683 5.68777V5.57795H16.803V5.68777H14.7683ZM17.2943 6.20222V5.55483H17.4041V6.20222H17.6064V5.55483H17.7163V6.31204H16.9764V5.99991H16.4619V6.20222H16.7972V6.31204H16.3579V5.89008H16.9822V5.55483H17.092V6.20222H17.2943Z"
                                    fill="#239F40"
                                  />
                                  <path
                                    d="M1.1619 5.57764H1.02895C1.01161 5.61232 0.994269 5.65278 0.976929 5.68746H1.1619V5.57764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M1.16212 6.31229V6.20247H0.826866V6.01172C0.786405 6.09842 0.751723 6.19091 0.717041 6.27761V6.31229H1.16212Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M1.34089 6.31239H2.08077V5.55518H1.96516V6.20256H1.76285V5.55518H1.65303V6.20256H1.45072V5.55518H1.34089V5.89043H0.884255C0.866914 5.92511 0.849573 5.96557 0.838013 6.00026H1.34668V6.31239H1.34089Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M2.09821 6.70496V6.64716V6.58936H0.693604V6.64716V6.70496H2.09821Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M2.09821 13.41V13.3522V13.2944H0.693604V13.3522V13.41H2.09821Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M1.16164 13.688H0.699219C0.71656 13.7227 0.728119 13.7631 0.74546 13.7978H1.16164V13.688Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M1.1619 14.312H0.976929C0.994269 14.3467 1.01161 14.3872 1.02895 14.4218H1.1619V14.312Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M1.34106 14.4218H2.08093V13.6646H1.96533V14.3119H1.76302V13.6646H1.65319V14.3119H1.45089V13.6646H1.34106V13.9998H0.832397C0.849738 14.0345 0.867079 14.0749 0.87864 14.1096H1.33528V14.4218H1.34106Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M4.28868 5.57764H2.25403V5.68746H4.28868V5.57764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M5.09229 6.20256H4.89576V5.55518H4.78015V6.20256H4.58362V5.55518H4.46802V5.89043H3.84375V6.31239H4.28883V6.20256H3.95357V6.00026H4.46802V6.31239H5.20789V5.55518H5.09229V6.20256Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M3.19653 5.99996H3.53178V6.20227H3.01734V5.89014H2.27747V6.33522H2.39307V5.99996H2.90751V6.3121H3.64161V5.89014H3.19653V5.99996Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M2.72845 6.20264H2.57239V6.31246H2.72845V6.20264Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M3.66441 6.70496V6.64716V6.58936H2.25403V6.64716V6.70496H3.66441Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M5.23118 6.70496V6.64716V6.58936H3.8208V6.64716V6.70496H5.23118Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M3.66441 13.41V13.3522V13.2944H2.25403V13.3522V13.41H3.66441Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M5.23118 13.41V13.3522V13.2944H3.8208V13.3522V13.41H5.23118Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M2.72845 14.312H2.57239V14.4218H2.72845V14.312Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M3.19653 14.1093H3.53178V14.3116H3.01734V13.9995H2.27747V14.4446H2.39307V14.1093H2.90751V14.4215H3.64161V13.9995H3.19653V14.1093Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M5.09229 14.3119H4.89576V13.6646H4.78015V14.3119H4.58362V13.6646H4.46802V13.9998H3.84375V14.4218H4.28883V14.3119H3.95357V14.1096H4.46802V14.4218H5.20789V13.6646H5.09229V14.3119Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M4.28868 13.688H2.25403V13.7978H4.28868V13.688Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M6.32368 5.99996H6.65894V6.20227H6.14449V5.89014H5.4104V6.33522H5.52022V5.99996H6.03467V6.3121H6.76876V5.89014H6.32368V5.99996Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8.22526 6.20256H8.02295V5.55518H7.91313V6.20256H7.71082V5.55518H7.59521V5.89043H6.97095V6.31239H7.41603V6.20256H7.08077V6.00026H7.59521V6.31239H8.33509V5.55518H8.22526V6.20256Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M5.85528 6.20264H5.69922V6.31246H5.85528V6.20264Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M7.42198 5.57764H5.38733V5.68746H7.42198V5.57764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8.35826 6.70496V6.64716V6.58936H6.94788V6.64716V6.70496H8.35826Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M6.79193 6.70496V6.64716V6.58936H5.38733V6.64716V6.70496H6.79193Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8.35826 13.41V13.3522V13.2944H6.94788V13.3522V13.41H8.35826Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M6.79193 13.41V13.3522V13.2944H5.38733V13.3522V13.41H6.79193Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M5.85528 14.312H5.69922V14.4218H5.85528V14.312Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M7.42198 13.688H5.38733V13.7978H7.42198V13.688Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8.22526 14.3119H8.02295V13.6646H7.91313V14.3119H7.71082V13.6646H7.59521V13.9998H6.97095V14.4218H7.41603V14.3119H7.08077V14.1096H7.59521V14.4218H8.33509V13.6646H8.22526V14.3119Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M6.32368 14.1093H6.65894V14.3116H6.14449V13.9995H5.4104V14.4446H5.52022V14.1093H6.03467V14.4215H6.76876V13.9995H6.32368V14.1093Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M10.5492 5.57764H8.51453V5.68746H10.5492V5.57764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M9.45063 5.99996H9.78589V6.20227H9.27145V5.89014H8.53735V6.33522H8.64718V5.99996H9.16162V6.3121H9.90149V5.89014H9.45063V5.99996Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.3523 6.20256H11.15V5.55518H11.0402V6.20256H10.8379V5.55518H10.7281V5.89043H10.098V6.31239H10.5489V6.20256H10.2136V6.00026H10.7281V6.31239H11.4622V5.55518H11.3523V6.20256Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8.98236 6.20264H8.82629V6.31246H8.98236V6.20264Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.4854 6.70496V6.64716V6.58936H10.0808V6.64716V6.70496H11.4854Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M9.91913 6.70496V6.64716V6.58936H8.51453V6.64716V6.70496H9.91913Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.4854 13.41V13.3522V13.2944H10.0808V13.3522V13.41H11.4854Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M9.91913 13.41V13.3522V13.2944H8.51453V13.3522V13.41H9.91913Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8.98236 14.312H8.82629V14.4218H8.98236V14.312Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M9.45063 14.1093H9.78589V14.3116H9.27145V13.9995H8.53735V14.4446H8.64718V14.1093H9.16162V14.4215H9.90149V13.9995H9.45063V14.1093Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.3523 14.3119H11.15V13.6646H11.0402V14.3119H10.8379V13.6646H10.7281V13.9998H10.098V14.4218H10.5489V14.3119H10.2136V14.1096H10.7281V14.4218H11.4622V13.6646H11.3523V14.3119Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M10.5492 13.688H8.51453V13.7978H10.5492V13.688Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M12.1097 6.20264H11.9536V6.31246H12.1097V6.20264Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M14.4797 6.20256H14.2774V5.55518H14.1676V6.20256H13.9653V5.55518H13.8555V5.89043H13.2312V6.31239H13.6763V6.20256H13.341V6.00026H13.8555V6.31239H14.5896V5.55518H14.4797V6.20256Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M12.5836 5.99996H12.9189V6.20227H12.4044V5.89014H11.6646V6.33522H11.7744V5.99996H12.2888V6.3121H13.0287V5.89014H12.5836V5.99996Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M13.6759 5.57764H11.6412V5.68746H13.6759V5.57764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M14.6124 6.70496V6.64716V6.58936H13.2078V6.64716V6.70496H14.6124Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M13.0516 6.70496V6.64716V6.58936H11.6412V6.64716V6.70496H13.0516Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M14.6124 13.41V13.3522V13.2944H13.2078V13.3522V13.41H14.6124Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M13.0516 13.41V13.3522V13.2944H11.6412V13.3522V13.41H13.0516Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M12.5836 14.1093H12.9189V14.3116H12.4044V13.9995H11.6646V14.4446H11.7744V14.1093H12.2888V14.4215H13.0287V13.9995H12.5836V14.1093Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M14.4797 14.3119H14.2774V13.6646H14.1676V14.3119H13.9653V13.6646H13.8555V13.9998H13.2312V14.4218H13.6763V14.3119H13.341V14.1096H13.8555V14.4218H14.5896V13.6646H14.4797V14.3119Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M12.1097 14.312H11.9536V14.4218H12.1097V14.312Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M13.6759 13.688H11.6412V13.7978H13.6759V13.688Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M16.8031 5.57764H14.7684V5.68746H16.8031V5.57764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M15.7109 5.99996H16.0462V6.20227H15.5317V5.89014H14.7919V6.33522H14.9075V5.99996H15.4161V6.3121H16.156V5.89014H15.7109V5.99996Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M16.9823 5.55518V5.89043H16.358V6.31239H16.8031V6.20256H16.4679V6.00026H16.9823V6.31239H17.7222V5.55518H17.6066V6.20256H17.41V5.55518H17.2944V6.20256H17.0921V5.55518H16.9823Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M15.2369 6.20264H15.0808V6.31246H15.2369V6.20264Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M17.7453 6.70496V6.64716V6.58936H16.335V6.64716V6.70496H17.7453Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M16.1788 6.70496V6.64716V6.58936H14.7684V6.64716V6.70496H16.1788Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M16.1788 13.41V13.3522V13.2944H14.7684V13.3522V13.41H16.1788Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M17.7453 13.41V13.3522V13.2944H16.335V13.3522V13.41H17.7453Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M15.2369 14.312H15.0808V14.4218H15.2369V14.312Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M17.6066 14.3119H17.41V13.6646H17.2944V14.3119H17.0921V13.6646H16.9823V13.9998H16.358V14.4218H16.8031V14.3119H16.4679V14.1096H16.9823V14.4218H17.7222V13.6646H17.6066V14.3119Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M16.8031 13.688H14.7684V13.7978H16.8031V13.688Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M15.7109 14.1093H16.0462V14.3116H15.5317V13.9995H14.7919V14.4446H14.9075V14.1093H15.4161V14.4215H16.156V13.9995H15.7109V14.1093Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M18.8379 5.99996H19.1674C19.15 5.96528 19.1327 5.92482 19.1211 5.89014H18.8437V5.99996H18.8379Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M18.6588 6.20227V5.89014H17.9189V6.33522H18.0288V5.99996H18.5432V6.3121H19.2831V6.27741C19.2484 6.18493 19.2079 6.09823 19.1733 6.01152V6.19649H18.6588V6.20227Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M17.9016 5.68746H19.0288C19.0114 5.65278 18.9941 5.61232 18.9767 5.57764H17.9074V5.68746H17.9016Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M18.3696 6.20264H18.2135V6.31246H18.3696V6.20264Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M19.3062 6.70496V6.64716V6.58936H17.9016V6.64716V6.70496H19.3062Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M19.3062 13.41V13.3522V13.2944H17.9016V13.3522V13.41H19.3062Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M18.3696 14.312H18.2135V14.4218H18.3696V14.312Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M18.8381 14.1093H19.1155C19.1329 14.0747 19.1502 14.0342 19.1618 13.9995H18.8323V14.1093H18.8381Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M17.9016 13.7978H19.2542C19.2715 13.7631 19.2831 13.7227 19.3004 13.688H17.9016V13.7978Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M18.6588 13.9995H17.9189V14.4446H18.0288V14.1093H18.5432V14.4215H18.9652C18.9825 14.3868 18.9999 14.3463 19.0172 14.3116H18.653V13.9995H18.6588Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M9.60667 11.9536C9.29453 12.0692 8.95928 12.1212 8.62402 12.1039C9.01708 12.2311 9.4217 12.2484 9.8032 12.1675L9.79742 12.0403C9.73383 12.0172 9.67025 11.9825 9.60667 11.9536Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M10.8264 8.18506C11.5894 9.31221 11.3119 10.8324 10.2194 11.6243L10.2079 11.8786C10.2657 11.9075 10.3293 11.9307 10.3929 11.9538C10.9073 11.6879 11.3177 11.2255 11.5084 10.6301C11.7975 9.75151 11.5258 8.78621 10.8264 8.18506Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M11.0576 8.13867C12.1674 8.97103 12.3929 10.549 11.5547 11.6588C11.5547 11.6588 11.5547 11.6646 11.5489 11.6646C12.468 11.1328 12.7801 9.95945 12.2484 9.04039C11.994 8.58953 11.5663 8.26584 11.0576 8.13867Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M10.0344 11.7857C10.0922 11.8146 10.15 11.8493 10.2078 11.8724L10.2194 11.6181L10.2945 9.73953V8.25978C10.1789 8.20198 10.0749 8.11528 9.99976 8.01123L10.1269 9.98808L10.0344 11.7857Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M9.99976 12.5146L10.1963 12.2429L10.2021 12.162C10.1443 12.1504 10.0807 12.1331 10.0229 12.1157L9.99976 12.5146Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M9.99976 7.90736C10.1154 8.06921 10.3408 8.10967 10.5026 7.99407C10.6414 7.8958 10.6934 7.71661 10.6298 7.56055C10.5951 7.74552 10.4159 7.8669 10.231 7.83222C10.1327 7.81488 10.046 7.7513 9.99976 7.66459L10.0518 7.84956L9.99976 7.90736Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M9.78005 11.6243C8.68758 10.8324 8.41591 9.31221 9.17312 8.18506C8.47371 8.78621 8.20204 9.75151 8.48527 10.6301C8.67602 11.2255 9.0922 11.6821 9.60086 11.9538C9.66444 11.9885 9.72803 12.0174 9.79161 12.0405L9.78005 11.6243Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M10.0346 11.7861L10.0172 12.1156C10.075 12.1329 10.1386 12.1503 10.1964 12.1618C10.5779 12.2428 10.9825 12.2254 11.3756 12.0983C11.0403 12.1156 10.7051 12.0636 10.3929 11.948C10.3293 11.9249 10.2715 11.9017 10.208 11.8728C10.1502 11.8497 10.0924 11.8208 10.0346 11.7861Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M8.94207 8.13867C8.43919 8.26584 8.00567 8.58953 7.74556 9.04039C7.21378 9.95945 7.53169 11.1328 8.44497 11.6646C8.44497 11.6646 8.44497 11.6588 8.43919 11.6588C7.60683 10.549 7.83226 8.97103 8.94207 8.13867Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M10.0346 11.7859L10.1213 9.9998L9.99413 8.02295C9.91899 8.12699 9.81495 8.2137 9.69934 8.2715V9.75125L9.77449 11.6298L9.79183 12.046L9.79761 12.1732L9.80339 12.2541L9.99991 12.5258L10.0173 12.1327L10.0346 11.7859Z"
                                    fill="#DA0000"
                                  />
                                  <path
                                    d="M9.49704 8.00008C9.65889 8.11569 9.8901 8.07523 9.99993 7.91338L10.0519 7.86714L9.99993 7.68217C9.94791 7.76887 9.86698 7.82668 9.76872 7.8498C9.58375 7.88448 9.40456 7.76309 9.36988 7.57812C9.3063 7.72263 9.35832 7.90182 9.49704 8.00008Z"
                                    fill="#DA0000"
                                  />
                                </svg>
                              </div>
                              <!-- end icon -->
                            </div>
                          </div>
                          <!-- endcol2 -->
                          <!-- col3 -->
                          <div class="flex items-center space-s-2 justify-between">
                            <div>
                            <span class="text-xs lg:text-normal">قیمت لحظه ثبت سفارش :</span>
                          </div>
                            <span class="hidden lg:block lg:text-xs">(21.720 USDT)</span>
                            <div class="flex space-s-2 items-center">
                              <span class="font-bold text-sm text-emerald-500">
                                1.006.750.000
                              </span>
                              <span class="font-bold text-sm">تومان</span>
                            </div>
                          </div>
                          <!-- endcol3 -->
                          <!-- col4 -->
                          <div class="flex justify-between">
                            <p class="">کارمزد شبکه :</p>
                            <div class="flex space-s-2 items-center">
                              <span class="font-bold text-emerald-500"
                                >0.14</span
                              >
                              <span class="font-bold text-sm">تتر</span>
                              <!-- icon -->

                              <!-- end icon -->
                            </div>
                          </div>
                          <!-- endcol4 -->
                          <!-- col5 -->
                          <div
                            class="flex justify-between bg-white p-2 rounded-xl dark:bg-slate-600"
                          >
                            <p class="">دریافتی شما :</p>
                            <div class="flex space-s-2 items-center">
                              <span class="font-bold text-emerald-500"
                                >0.14024</span
                              >
                              <span class="font-bold text-sm">تتر</span>
                              <!-- icon -->
                              <div>
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11"
                                    cy="11"
                                    r="11"
                                    fill="#00BE91"
                                  />
                                  <path
                                    d="M15.2308 7.35107H6.76922C6.33557 7.35107 5.97595 7.71069 5.97595 8.14434C5.97595 8.578 6.33557 8.93761 6.76922 8.93761H10.2067V14.4905C10.2067 14.9242 10.5663 15.2838 11 15.2838C11.4336 15.2838 11.7933 14.9242 11.7933 14.4905V8.93761H15.2308C15.6644 8.93761 16.024 8.578 16.024 8.14434C16.024 7.71069 15.6644 7.35107 15.2308 7.35107Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <!-- end icon -->
                            </div>
                          </div>
                          <!-- endcol5 -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- endresid-->
              <!-- rules -->
              <div
                class="flex mt-8 items-center w-full bg-gray-50 rounded-b-xl p-4 justify-between dark:bg-slate-900"
              >
                <div class="flex space-s-1 md:flex items-center">
                  <svg
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="10"
                      transform="matrix(-1 0 0 1 22 2)"
                      fill="#1CAC70"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 7.26316C12.9941 7.26316 13.8 8.11146 13.8 9.15789C13.8 9.50671 14.0686 9.78947 14.4 9.78947C14.7314 9.78947 15 9.50671 15 9.15789C15 7.41384 13.6569 6 12 6C10.3431 6 9 7.41384 9 9.15789C9 10.541 9.84431 11.7148 11.0182 12.1426C11.1442 12.1885 11.2507 12.263 11.3186 12.3421C11.3834 12.4175 11.4 12.4793 11.4 12.5263V13.3684C11.4 13.7172 11.6686 14 12 14C12.3314 14 12.6 13.7172 12.6 13.3684V12.5263C12.6 11.6821 11.9537 11.1468 11.4108 10.949C10.7052 10.6918 10.2 9.98616 10.2 9.15789C10.2 8.11146 11.0059 7.26316 12 7.26316Z"
                      fill="white"
                    />
                    <path
                      d="M11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16Z"
                      fill="white"
                    />
                  </svg>
                  <p class="text-sm">قوانین و مقررات</p>
                </div>
                <div class="flex items-center space-s-2">
                  <a
                    href="level2"
                    class="p-3 px-8 text-white bg-emerald-500 md:p-3 rounded-full md:px-12"
                    >مرحله بعد</a
                  >

                  <div
                    class="border rounded-full px-2 p-1.5 dark:bg-slate-800 dark:border-0 dark:text-white"
                  >
                    <div class="flex items-center space-s-2">
                      <div
                        class="bg-white px-4 rounded-full p-1.5 dark:bg-slate-600"
                      >
                        <p class="rounded-full">مرحله اول</p>
                      </div>
                      <div class="px-4">
                        <p class="">مرحله دوم</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end rules-->
            </div>
          </div>
          <!-- chart -->
          <div class="container mx-auto text-sm">
            <div class="mt-4">
              <div class="flex flex-row space-s-2">
                <div
                  class="basis-full bg-white rounded-xl dark:bg-slate-900 dark:text-white"
                >
                  <div class="p-4">
                    <div class="flex justify-between items-center">
                      <!-- tet -->
                      <div class="flex items-center space-s-3">
                        <div>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20" cy="20" r="20" fill="#00BE91" />
                            <path
                              d="M27.6924 13.3657H12.3078C11.5193 13.3657 10.8655 14.0196 10.8655 14.808C10.8655 15.5965 11.5193 16.2503 12.3078 16.2503H18.5578V26.3465C18.5578 27.135 19.2116 27.7888 20.0001 27.7888C20.7886 27.7888 21.4424 27.135 21.4424 26.3465V16.2503H27.6924C28.4809 16.2503 29.1347 15.5965 29.1347 14.808C29.1347 14.0196 28.4809 13.3657 27.6924 13.3657Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <div class="flex justify-between">
                            <p>تتر</p>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.4401 6.13477H8.76756H4.56006C3.84006 6.13477 3.48006 7.00477 3.99006 7.51477L7.87506 11.3998C8.49756 12.0223 9.51006 12.0223 10.1326 11.3998L11.6101 9.92227L14.0176 7.51477C14.5201 7.00477 14.1601 6.13477 13.4401 6.13477Z"
                                fill="#464646"
                              />
                            </svg>
                          </div>
                          <p class="text-xs text-center">Tether - USDT</p>
                        </div>
                      </div>
                      <!-- end tet -->
                      <div class="flex flex-row">
                        <div class="flex items-center"></div>
                        <div class="flex items-center space-s-2">
                          <p>نمای بزرگ</p>
                          <svg
                            class="stroke-[#28303F] dark:stroke-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6L14 10M18 6V10M18 6H14"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7 18L11 14M7 18V14M7 18H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z"
                              stroke="#28303F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <!-- end chart -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end chart -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showdropdown1: false,
      showdropdown: false,
      showside: false,
      showwal: false,
      shownet: false,
      isOptionsExpanded1: false,
      isOptionsExpanded: false,
      selectedOption: "1x",
      options: [""],
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
      this.isOptionsExpanded1 = false;
    },
    toggledrop1() {
      this.showdropdown1 = !this.showdropdown1;
    },

    togglenet() {
      this.shownet = !this.shownet;
    },

    togglewal() {
      this.showwal = !this.showwal;
    },

    togglesidebar() {
      this.showside = !this.showside;
    },

    // toggle user
    toggledrop() {
      this.showdropdown = !this.showdropdown;
    },
  },
};
</script>
<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
