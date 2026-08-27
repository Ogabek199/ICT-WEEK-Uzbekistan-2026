<template>
  <section id="home" class="hero-section">
    <div class="page-container">
      <!-- Main Centered Heading matching Figma -->
      <div class="hero-heading-block">
        <h1 class="hero-title">
          {{ t('hero.titleLine1') }} <br />
          {{ t('hero.titleLine2') }}
        </h1>
      </div>

      <!-- Hero Two-Column Layout -->
      <div class="hero-media-grid">
        <!-- Left: CAEx Aerial Video Showcase Card with Balloon -->
        <div class="video-showcase-card glass-panel" @click="openVideoModal">
          <img 
            src="@/assets/images/hero-caex-balloon.png" 
            alt="CAEx Aerial View - ICT WEEK 2026" 
            class="video-bg-img"
            fetchpriority="high"
          />
          <div class="video-overlay"></div>
          
          <!-- Circular Play Button with Frosted Glass Outer Ring & Green Disc -->
          <div class="play-btn-circle">
            <div class="play-btn-inner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#030A12">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
            </div>
          </div>
        </div>

        <!-- Right: Screen Image (ICT Stage) + Subtitle + Buttons + Countdown -->
        <div class="hero-info-card glass-panel">
          <div class="info-card-content">
            <!-- Screen image -->
            <div class="screen-preview-wrapper">
              <img 
                src="@/assets/images/hero-screen-thumb.png" 
                alt="ICTWEEK Stage Presentation" 
                class="screen-thumb-img"
                loading="eager"
              />
            </div>

            <!-- Subtitle -->
            <p class="hero-info-desc">
              {{ t('hero.subtitle') }}
            </p>

            <!-- CTA Buttons -->
            <div class="hero-info-ctas">
              <a href="#register" class="btn-primary hero-main-btn">
                <span>{{ t('hero.registerBtn') }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a href="#summit-tracks" class="btn-secondary hero-agenda-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>{{ t('hero.agendaBtn') }}</span>
              </a>
            </div>

            <!-- Countdown 3-box row -->
            <div class="countdown-3boxes-row">
              <div class="countdown-box">
                <span class="count-num">{{ days }}</span>
                <span class="count-unit">{{ t('hero.days') }}</span>
              </div>
              <div class="countdown-box">
                <span class="count-num">{{ formatTime(hours) }}</span>
                <span class="count-unit">{{ t('hero.hours') }}</span>
              </div>
              <div class="countdown-box">
                <span class="count-num">{{ formatTime(minutes) }}</span>
                <span class="count-unit">{{ t('hero.minutes') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Stats / Ecosystem Valuation Bar (Exact 1:1 Figma 259:3733) -->
      <div class="stats-valuation-bar">
        <!-- Far Left: Medal Ribbon (150x150) -->
        <div class="medal-wrapper">
          <img 
            src="@/assets/images/34d40235a885784b968f902082f60ccc6508a418.png" 
            alt="StartupBlink Country of the Year Medal" 
            class="medal-img"
          />
        </div>

        <!-- 3 Exact Neon Green Border Cards (405px + 332px + 255px) -->
        <div class="stats-cards-row">
          
          <!-- Card 1: $4.3B + #1 Venture Growth (405x108) -->
          <div class="stat-neon-card card-dealroom">
            <div class="badge-year-top">2026</div>

            <div class="stat-col stat-col-1">
              <span class="stat-num">$4.3B</span>
              <span class="stat-label">Startup Ecosystem<br/>Valuation</span>
            </div>

            <div class="stat-col stat-col-2">
              <span class="stat-num">#1</span>
              <span class="stat-label">In venture investment<br/>growth globally</span>
            </div>

            <div class="dealroom-logo-box">
              <img 
                src="@/assets/images/35d95e7cd46371573980312f195204bf80736fd0.png" 
                alt="dealroom.co" 
                class="dealroom-logo-img" 
              />
            </div>
          </div>

          <!-- Card 2: #1 Growth Rate + #1 Startup Hub (332x108) -->
          <div class="stat-neon-card card-startupblink">
            <div class="badge-year-top badge-startupblink">2026</div>

            <div class="stat-col stat-col-1">
              <span class="stat-num">#1</span>
              <span class="stat-label">Ecosystem in the<br/>World by Growth<br/>Rate</span>
            </div>

            <div class="stat-col stat-col-2">
              <span class="stat-num">#1</span>
              <span class="stat-label">Startup Hub in<br/>Central Asia<br/>(Tashkent)</span>
            </div>

            <div class="startupblink-logo-box">
              <svg width="95" height="16" viewBox="0 0 95 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_872_12)">
                  <path d="M15.481 10.3429H17.0969C17.1253 10.593 17.2103 10.8336 17.3453 11.0468C17.4804 11.2601 17.6623 11.4406 17.8774 11.5753C18.3968 11.9051 19.0061 12.0694 19.623 12.046C20.2041 12.0683 20.7775 11.9088 21.2614 11.59C21.4594 11.4671 21.6228 11.2968 21.7362 11.0946C21.8496 10.8925 21.9093 10.6652 21.9098 10.4341C21.9142 10.2452 21.8748 10.0579 21.7943 9.88661C21.7139 9.71521 21.5947 9.56442 21.4459 9.44578C21.001 9.12887 20.4896 8.91491 19.9497 8.81981L18.5831 8.49446C17.6222 8.26608 16.914 7.92593 16.4585 7.47413C16.2271 7.2404 16.0465 6.96248 15.9277 6.65732C15.809 6.35218 15.7545 6.02628 15.7677 5.6996C15.7587 5.27723 15.8508 4.85875 16.0367 4.47837C16.2227 4.09798 16.4971 3.76649 16.8376 3.51102C17.5507 2.94908 18.4726 2.6673 19.6031 2.66566C20.7335 2.66401 21.6396 2.94498 22.3212 3.50855C22.6585 3.76848 22.9317 4.10078 23.1201 4.48036C23.3084 4.85993 23.4071 5.27683 23.4085 5.6996H21.81C21.7938 5.45994 21.7249 5.22666 21.6082 5.01597C21.4914 4.80529 21.3297 4.62226 21.1342 4.47961C20.6787 4.16223 20.1301 4.00198 19.5732 4.02366C19.0239 3.99984 18.4817 4.15198 18.027 4.45743C17.8413 4.58175 17.6899 4.7498 17.5862 4.94643C17.4826 5.14307 17.4301 5.36209 17.4336 5.58376C17.4296 5.75852 17.4678 5.93169 17.545 6.08897C17.6222 6.24625 17.7361 6.38312 17.8774 6.48828C18.3216 6.78351 18.821 6.98797 19.3462 7.08965L20.5083 7.3706C21.5905 7.622 22.3711 7.97529 22.8499 8.43038C23.0927 8.66849 23.2822 8.95431 23.4064 9.26925C23.5305 9.58427 23.5865 9.92148 23.5705 10.2591C23.5872 10.7034 23.4964 11.1451 23.3056 11.5476C23.1147 11.9502 22.8294 12.3018 22.4733 12.5734C21.7419 13.1452 20.751 13.4303 19.5008 13.4286C18.3255 13.4286 17.3745 13.151 16.6481 12.5956C16.2934 12.3322 16.0041 11.9924 15.8019 11.6022C15.5997 11.2119 15.4899 10.7813 15.481 10.3429Z" fill="white"/>
                  <path d="M25.3092 3.85315H26.8951V5.64985H28.3565V6.88214H26.8951V11.072C26.8724 11.3323 26.9529 11.5913 27.1196 11.7942C27.216 11.8783 27.3287 11.9422 27.4509 11.9821C27.5731 12.0219 27.7021 12.0367 27.8303 12.0259C28.0039 12.0305 28.1778 12.0181 28.3489 11.9889V13.2212C28.0602 13.2791 27.7657 13.3038 27.4712 13.2951C26.6965 13.2951 26.1428 13.1373 25.8104 12.8219C25.4762 12.5065 25.3116 11.979 25.3116 11.2445V6.88461H24.1895V5.65232H25.3067L25.3092 3.85315Z" fill="white"/>
                  <path d="M31.7821 13.3872C31.1074 13.4158 30.4472 13.1883 29.9367 12.7513C29.7023 12.5443 29.517 12.2889 29.3937 12.003C29.2705 11.7172 29.2124 11.408 29.2235 11.0976C29.2127 10.7938 29.2749 10.4919 29.405 10.2164C29.535 9.94093 29.7292 9.6998 29.9716 9.51286C30.4704 9.12176 31.1745 8.90161 32.0837 8.85233L34.1859 8.72908V8.13263C34.1954 7.94871 34.1636 7.76501 34.0929 7.59459C34.0222 7.42418 33.9144 7.27126 33.777 7.14681C33.4581 6.89203 33.0542 6.76455 32.6449 6.78942C32.2584 6.77257 31.8764 6.87604 31.5527 7.0852C31.2758 7.27885 31.0862 7.5715 31.024 7.90093H29.5277C29.5428 7.5641 29.6331 7.23471 29.7922 6.93641C29.9513 6.63818 30.1752 6.37838 30.448 6.17574C31.0979 5.70846 31.8894 5.47377 32.6923 5.51029C33.6232 5.51029 34.3647 5.73704 34.9167 6.19053C35.1872 6.41004 35.4028 6.68849 35.5464 7.00401C35.6901 7.31954 35.7579 7.66365 35.7445 8.00939V13.2443H34.2333V11.9947H34.196C33.971 12.4197 33.624 12.7696 33.1985 13.0003C32.7687 13.2495 32.2804 13.383 31.7821 13.3872ZM32.2185 12.1549C32.7313 12.1729 33.2317 11.9966 33.6174 11.662C33.7977 11.5104 33.9419 11.3213 34.0398 11.1083C34.1376 10.8953 34.1867 10.6636 34.1835 10.4296V9.80116L32.2933 9.91701C31.9031 9.9232 31.5234 10.0423 31.201 10.2597C31.0776 10.3498 30.9781 10.4682 30.9112 10.6046C30.8444 10.7412 30.812 10.8917 30.817 11.0433C30.8121 11.1967 30.8444 11.349 30.9111 11.4875C30.978 11.626 31.0774 11.7467 31.201 11.8394C31.4953 12.0519 31.8545 12.158 32.2185 12.1401V12.1549Z" fill="white"/>
                  <path d="M37.2827 13.2445V5.64855H38.7789V6.94247H38.8164C38.9208 6.53163 39.1592 6.16612 39.4946 5.90241C39.8294 5.6482 40.2422 5.51511 40.6642 5.52533C40.846 5.52863 41.0272 5.54843 41.2054 5.58447V7.03612C40.9766 6.96469 40.7367 6.93463 40.4971 6.94741C40.2743 6.93629 40.0518 6.9726 39.8444 7.05377C39.6371 7.13502 39.4497 7.25923 39.2952 7.41813C38.9849 7.77405 38.8282 8.23594 38.8588 8.70469V13.2445H37.2827Z" fill="white"/>
                  <path d="M43.1419 3.85315H44.7278V5.64985H46.1892V6.88214H44.7378V11.072C44.715 11.3323 44.7955 11.5913 44.9622 11.7942C45.0586 11.8783 45.1714 11.9422 45.2935 11.9821C45.4157 12.0219 45.5448 12.0367 45.673 12.0259C45.8467 12.0305 46.0204 12.0181 46.1917 11.9889V13.2212C45.9028 13.2792 45.6083 13.304 45.3139 13.2951C44.5407 13.2951 43.9847 13.1373 43.653 12.8219C43.3213 12.5065 43.1542 11.979 43.1542 11.2445V6.88461H42.0371V5.65232H43.1419V3.85315Z" fill="white"/>
                  <path d="M54.0805 5.65024V13.2462H52.5667V11.9622H52.5318C52.0897 12.9135 51.2958 13.3891 50.1503 13.3891C49.7855 13.4087 49.4207 13.3514 49.0798 13.2215C48.7389 13.0915 48.4299 12.8916 48.1728 12.635C47.6941 12.142 47.4521 11.4446 47.4521 10.572V5.65024H49.0307V10.264C48.9961 10.7419 49.1447 11.2154 49.4472 11.5899C49.6073 11.7472 49.7996 11.8689 50.0112 11.9466C50.2228 12.0244 50.4488 12.0566 50.674 12.041C50.9232 12.0536 51.1721 12.0122 51.4034 11.9198C51.6347 11.8275 51.8428 11.6863 52.0132 11.5062C52.3569 11.1095 52.5352 10.5985 52.5119 10.0767V5.64038L54.0805 5.65024Z" fill="white"/>
                  <path d="M59.6397 5.52649C60.0884 5.51115 60.5348 5.59913 60.9433 5.78347C61.3519 5.96782 61.7114 6.2435 61.9937 6.58877C62.5824 7.29692 62.8766 8.2499 62.8766 9.44764C62.8766 10.6455 62.5849 11.6002 62.0012 12.3116C61.7248 12.6588 61.37 12.9372 60.965 13.1242C60.5601 13.3113 60.1164 13.4018 59.6696 13.3886C59.1608 13.3982 58.6589 13.2704 58.2183 13.019C57.8042 12.7809 57.4683 12.4301 57.2506 12.0084H57.2158V15.7596H55.6372V5.65465H57.1634V6.96091H57.1933C57.4177 6.52531 57.7639 6.1626 58.1908 5.9159C58.6282 5.65654 59.1296 5.52177 59.6397 5.52649ZM59.2232 12.0553C59.5097 12.0651 59.7944 12.0061 60.0528 11.8833C60.3113 11.7605 60.5358 11.5777 60.7069 11.3504C61.0986 10.794 61.2916 10.1245 61.2555 9.44764C61.2905 8.77247 61.0975 8.10492 60.7069 7.54998C60.5322 7.32872 60.3089 7.14974 60.0537 7.02665C59.7986 6.90355 59.5183 6.83959 59.2344 6.83959C58.9505 6.83959 58.6703 6.90355 58.4152 7.02665C58.16 7.14974 57.9365 7.32872 57.7619 7.54998C57.3684 8.10289 57.1734 8.77006 57.2083 9.44522C57.1724 10.1202 57.3664 10.7874 57.7594 11.3405C57.926 11.5685 58.1464 11.7529 58.4015 11.8775C58.6567 12.0021 58.9388 12.0631 59.2232 12.0553Z" fill="white"/>
                  <path d="M68.5082 13.2439H64.2695V2.82596H68.4764C69.2866 2.78693 70.0836 3.03906 70.7207 3.53576C70.9975 3.76602 71.2179 4.05574 71.3653 4.38288C71.5121 4.71003 71.5815 5.06598 71.5683 5.42366C71.5708 5.96483 71.3784 6.48921 71.0249 6.90245C70.6945 7.31916 70.2185 7.59865 69.6907 7.6862V7.7453C70.3541 7.79782 70.975 8.08899 71.4359 8.56356C71.8725 9.03322 72.1074 9.65156 72.0918 10.2888C72.1118 10.6977 72.0356 11.1055 71.8694 11.4805C71.7033 11.8554 71.4522 12.1874 71.1342 12.4503C70.5058 12.9793 69.6307 13.2439 68.5082 13.2439ZM65.9148 4.14699V7.25736H67.7481C68.3215 7.29373 68.8924 7.14779 69.3765 6.84084C69.5639 6.70385 69.7138 6.52328 69.8132 6.31519C69.9131 6.10709 69.9593 5.87788 69.9474 5.64794C69.9599 5.43847 69.923 5.229 69.8393 5.03609C69.7556 4.84317 69.6282 4.6721 69.4658 4.5364C69.0673 4.25384 68.582 4.11626 68.0922 4.14699H65.9148ZM65.9148 11.9229H68.1716C68.9068 11.9229 69.4671 11.7758 69.8525 11.4817C70.0455 11.3289 70.1991 11.1325 70.2991 10.9091C70.3996 10.6856 70.444 10.4416 70.429 10.1976C70.429 9.06228 69.6451 8.49375 68.0773 8.49209H65.9148V11.9229Z" fill="white"/>
                  <path d="M73.3823 13.2458V2.82788H74.9614V13.2458H73.3823Z" fill="white"/>
                  <path d="M78.0722 4.26922C77.9869 4.35321 77.8858 4.4194 77.7741 4.46385C77.6616 4.5083 77.5416 4.53012 77.4216 4.528C77.3016 4.53016 77.1832 4.50835 77.0715 4.46387C76.9613 4.41939 76.8601 4.35318 76.7756 4.26922C76.6903 4.18832 76.6216 4.09071 76.5756 3.98256C76.5303 3.8744 76.5069 3.75802 76.5092 3.64074C76.5054 3.52222 76.5281 3.40443 76.5749 3.29493C76.6201 3.18542 76.6888 3.08662 76.7756 3.00487C76.9492 2.83731 77.1832 2.74353 77.4254 2.74353C77.6684 2.74353 77.9009 2.83731 78.0745 3.00487C78.1598 3.08743 78.2269 3.18584 78.273 3.29437C78.319 3.4029 78.3432 3.51938 78.3432 3.63704C78.3432 3.75471 78.319 3.87119 78.273 3.97972C78.2269 4.08825 78.1598 4.18666 78.0745 4.26922H78.0722ZM76.6337 13.2355V5.6494H78.2096V13.2453L76.6337 13.2355Z" fill="white"/>
                  <path d="M79.8247 13.2432V5.64727H81.3213V6.91901H81.3583C81.5583 6.49068 81.8836 6.13109 82.2911 5.88634C82.7417 5.62911 83.2549 5.50109 83.7749 5.51665C84.6179 5.51665 85.2715 5.76311 85.7394 6.25603C86.2089 6.74893 86.4405 7.44153 86.4405 8.31643V13.2457H84.8549V8.62948C84.8881 8.15469 84.7417 7.68458 84.4428 7.3109C84.2843 7.15299 84.0919 7.03099 83.8806 6.95315C83.67 6.8753 83.4436 6.84345 83.2187 6.85987C82.9711 6.84956 82.7243 6.89198 82.4956 6.98426C82.2662 7.0765 82.0594 7.21651 81.8896 7.39467C81.544 7.78745 81.3651 8.29688 81.3907 8.81681V13.253L79.8247 13.2432Z" fill="white"/>
                  <path d="M89.625 8.90563L92.7292 5.64987H94.5843L91.4001 8.92042L94.7096 13.2458H92.8741L90.2733 9.87424L89.6175 10.5175V13.2458H88.0288V2.82788H89.6077V8.90563H89.625Z" fill="white"/>
                  <path d="M1.64834 3.28257C2.28657 2.64113 3.04829 2.1325 3.8886 1.78667C4.72889 1.44083 5.63075 1.26481 6.54097 1.26897C7.4505 1.2696 8.35094 1.44781 9.19057 1.79337C10.0302 2.13891 10.7925 2.64501 11.4337 3.28257C12.1725 4.00067 12.7346 4.87671 13.077 5.84329C12.8672 4.47756 12.2164 3.21541 11.2217 2.24496C10.6082 1.63552 9.87887 1.15211 9.07555 0.82259C8.27223 0.493074 7.41077 0.323969 6.54097 0.325024C5.6715 0.320926 4.80995 0.488662 4.007 0.818371C3.20403 1.14808 2.47586 1.63312 1.8653 2.24496C0.870702 3.22967 0.217642 4.5007 0 5.87534C0.345283 4.89962 0.908694 4.01338 1.64834 3.28257Z" fill="white"/>
                  <path d="M2.60623 5.00771C3.11903 4.49065 3.73142 4.08032 4.40726 3.80095C5.08311 3.52158 5.80872 3.37881 6.5413 3.38107C7.27292 3.38269 7.99696 3.52724 8.6719 3.80641C9.34684 4.08556 9.95922 4.49383 10.4739 5.00771C11.0674 5.58605 11.5195 6.29079 11.7955 7.06813C11.6251 5.97029 11.1003 4.95627 10.2993 4.17714C9.80722 3.68733 9.22194 3.2986 8.57718 3.03332C7.93243 2.76804 7.24094 2.63147 6.54254 2.63147C5.84416 2.63147 5.15266 2.76804 4.5079 3.03332C3.86314 3.2986 3.27786 3.68733 2.78578 4.17714C1.98741 4.96903 1.46358 5.99066 1.28955 7.09523C1.56517 6.31093 2.01508 5.59762 2.60623 5.00771Z" fill="white"/>
                  <path d="M5.86316 14.1977C6.11254 14.4689 6.332 14.7178 6.53893 14.9371C6.74593 14.6907 6.97536 14.4442 7.21478 14.1977C8.67112 12.6155 10.6785 10.4146 10.6785 8.70663C10.6812 8.18806 10.5759 7.67448 10.3692 7.19789C10.1624 6.7213 9.85852 6.29188 9.47655 5.93636C8.68463 5.19223 7.63165 4.78055 6.53893 4.78786C5.4497 4.77908 4.40006 5.19121 3.61384 5.93636C3.2323 6.29288 2.92795 6.72223 2.7192 7.19839C2.51046 7.67455 2.40166 8.18768 2.39941 8.70663C2.39941 10.4146 4.40685 12.6032 5.86316 14.1977Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_872_12">
                    <rect width="94.9434" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <!-- Card 3: 2 Fintech Unicorns (255x108) -->
          <div class="stat-neon-card card-unicorns">
            <div class="badge-year-top">2026</div>

            <div class="unicorn-left-group">
              <div class="unicorn-num-row">
                <span class="stat-num">2</span>
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="unicorn-head-svg">
                  <path d="M23.361 9.69342C24.6251 8.28337 29.2059 3.17223 30.5201 1.68559C30.8787 1.27994 30.8601 0.779878 30.4703 0.347871C30.4504 0.325782 30.4285 0.305276 30.4048 0.286559C29.9434 -0.0783558 29.4093 -0.0956966 28.9763 0.239973C27.3885 1.47076 21.9294 5.76083 20.4246 6.94372L19.8711 6.42556L23.7874 2.75845C23.945 2.61085 23.9921 2.38886 23.9068 2.19605C23.8215 2.00316 23.6205 1.87744 23.3976 1.87744C17.1478 1.87744 11.2722 4.15639 6.85299 8.29452C2.43376 12.4326 0 17.9345 0 23.7867C0 24.5829 0.0460031 25.3781 0.137054 26.1671C0.137495 26.1721 0.138083 26.1771 0.138671 26.1821C0.231926 26.9848 0.371846 27.7808 0.55799 28.5645C0.61509 28.805 0.842827 28.9687 1.09548 28.9687C1.13509 28.9687 1.17536 28.9646 1.21563 28.9563C1.51281 28.8944 1.70013 28.6187 1.63399 28.3404C1.50179 27.784 1.39406 27.2209 1.31094 26.6537C3.84214 26.7796 5.55719 27.6631 7.51923 28.6752C10.3913 30.1564 13.9656 32 21.3804 32C21.6848 32 21.9315 31.7689 21.9315 31.4839C21.9315 28.8478 20.5936 27.086 19.1772 25.2207C17.9769 23.6401 16.7358 22.0058 16.2636 19.6984C16.2064 19.4185 15.9176 19.2349 15.6186 19.2886C15.3197 19.3423 15.1238 19.6126 15.181 19.8927C15.6985 22.4208 17.0694 24.2261 18.2789 25.8189C19.542 27.4823 20.6462 28.9362 20.8088 30.9641C14.0707 30.8759 10.8776 29.2288 8.05113 27.771C6.0084 26.7174 4.07223 25.7197 1.18734 25.6152C1.13104 25.0081 1.10224 24.3977 1.10224 23.7867C1.10224 12.7065 10.368 3.61462 22.0251 2.94879L18.7018 6.06065C18.4866 6.2622 18.4866 6.58899 18.7018 6.79048L20.584 8.55291C20.7993 8.75446 21.1482 8.75446 21.3634 8.55291C21.5787 8.35136 21.5787 8.02456 21.3634 7.82308L21.2068 7.67637C22.7915 6.43065 28.013 2.32769 29.6311 1.0722C28.0518 2.85741 22.2509 9.3263 22.1919 9.39201C22.0081 9.59701 22.0221 9.89958 22.2242 10.0888L29.0321 16.4636C29.3007 16.7151 29.4487 17.0496 29.4487 17.4054C29.4487 17.7612 29.3007 18.0957 29.0321 18.3472C28.4773 18.8666 27.575 18.8665 27.0203 18.3472C26.9472 18.2788 26.8551 18.231 26.7544 18.2093L20.4204 16.8425C20.291 16.8146 20.1551 16.8313 20.0377 16.8898C17.9438 17.9333 15.4088 17.5783 13.7299 16.0063C12.0288 14.4134 11.6697 11.9348 12.8566 9.97871C13.007 9.73085 12.9144 9.41582 12.6498 9.27496C12.3851 9.1341 12.0486 9.22095 11.8983 9.46874C10.4669 11.8274 10.8997 14.8159 12.9504 16.7361C13.9492 17.6713 15.2143 18.2634 16.6092 18.4483C17.8878 18.6178 19.2142 18.4198 20.3683 17.8905L26.3627 19.184C26.8372 19.5736 27.4317 19.7684 28.0261 19.7684C28.6727 19.7684 29.3193 19.538 29.8115 19.0771C30.2883 18.6306 30.551 18.0369 30.551 17.4054C30.551 16.7739 30.2883 16.1802 29.8115 15.7337L23.361 9.69342Z" fill="white"/>
                </svg>
              </div>
              <span class="stat-label">Fintech<br/>Unicorns</span>
            </div>

            <div class="brands-right-group">
              <div class="brand-line">
                <svg width="90" height="24" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.5924 11.9524C25.5991 14.3238 24.8537 16.6425 23.4517 18.6176C22.0496 20.5916 20.0527 22.1326 17.7155 23.0439C15.3784 23.9552 12.8045 24.197 10.3203 23.7377C7.83612 23.2783 5.55289 22.1399 3.7602 20.4655C1.96751 18.791 0.745074 16.6562 0.248915 14.3311C-0.248368 12.006 0.0030796 9.59473 0.970703 7.40417C1.93833 5.21257 3.57835 3.33946 5.6831 2.0224C7.78785 0.703229 10.2642 2.40535e-05 12.7955 2.40535e-05C14.4737 -0.00312933 16.1373 0.3038 17.6886 0.903995C19.2399 1.50314 20.651 2.38293 21.8397 3.49292C23.0285 4.60292 23.9714 5.92103 24.6146 7.37264C25.259 8.82425 25.5901 10.3799 25.5912 11.9524H25.5924ZM14.2649 4.15093C13.7867 4.10889 13.2939 4.09207 12.7955 4.09207C12.2971 4.09207 11.8133 4.10889 11.3328 4.15093V10.525H14.2671L14.2649 4.15093ZM21.0349 7.86562C19.9651 7.53767 18.8729 7.28014 17.7649 7.09619V12.4443C17.7649 16.2967 16.016 18.3233 12.8 18.3233C9.5839 18.3233 7.835 16.2967 7.835 12.4443V7.09619C6.72706 7.28119 5.63483 7.53767 4.56506 7.86562V12.4769C4.63578 14.4783 5.53492 16.3756 7.07167 17.7683C8.60842 19.161 10.6638 19.9389 12.8022 19.9389C14.9406 19.9389 16.996 19.16 18.5327 17.7683C20.0695 16.3756 20.9686 14.4783 21.0394 12.4769L21.0349 7.86562Z" fill="white"/>
                  <path d="M66.9513 12.3539C66.9513 13.9075 66.0151 14.6254 64.6187 14.6254C63.2223 14.6254 62.3209 13.9212 62.3209 12.3539V7.22546H59.3125V12.4527C59.3125 15.8584 62.3557 17.1933 64.6423 17.1933C66.9289 17.1933 69.9754 15.8584 69.9754 12.4527V7.22546H66.9671L66.9525 12.3539H66.9513Z" fill="white"/>
                  <path d="M56.7679 9.60627V7.22546H46.9884V9.60627H52.7773L46.7549 14.6328V17.0136H57.1327V14.6328H50.7567L56.7668 9.60627H56.7679Z" fill="white"/>
                  <path d="M85.0394 7.03992C83.1322 7.03992 81.6954 7.7652 80.9848 8.87098C80.2586 7.7652 78.6825 7.03992 77.047 7.03992C73.8309 7.03992 72.1572 8.95928 72.1572 11.3296V17.0141H75.1667V11.7311C75.1667 10.5969 75.8021 9.60047 77.2614 9.60047C77.5589 9.58365 77.8563 9.62674 78.1347 9.7266C78.4131 9.82646 78.6657 9.97992 78.8756 10.1775C79.0855 10.3751 79.2483 10.6127 79.3538 10.8744C79.4582 11.1362 79.5031 11.4147 79.484 11.6933V17.0183H82.4935V11.6891C82.4935 10.5517 83.2086 9.59731 84.6521 9.59731C86.0957 9.59731 86.7928 10.5938 86.7928 11.7279V17.0109H89.8012V11.3369C89.8012 8.96663 88.2476 7.04727 85.0136 7.04727L85.0394 7.03992Z" fill="white"/>
                  <path d="M41.7619 12.3539C41.7619 13.9075 40.8257 14.6254 39.4416 14.6254C38.0575 14.6254 37.1326 13.9212 37.1326 12.3539V7.22546H34.123V12.4527C34.123 15.8584 37.155 17.1933 39.4528 17.1933C41.7507 17.1933 44.7748 15.8584 44.7748 12.4527V7.22546H41.7653L41.7619 12.3539Z" fill="white"/>
                </svg>
              </div>
              <div class="brand-line">
                <svg width="97" height="24" viewBox="0 0 97 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.293 12.0709V19.6131H36.0066V12.0709H33.4395V10.3159H40.8746V12.0709H38.293Z" fill="white"/>
                  <path d="M46.5587 17.9147C46.7504 17.8459 46.8986 17.7218 46.9866 17.5559C47.0601 17.3764 47.1047 17.1281 47.1047 16.7963C47.1047 16.4645 47.0601 16.2162 46.9866 16.0503C46.8986 15.8844 46.7504 15.7603 46.5443 15.6914C46.3526 15.6226 46.0429 15.5944 45.6596 15.5944H44.4652V18.0118H45.6596C46.0574 18.0118 46.3526 17.9847 46.5599 17.9147H46.5587ZM46.337 14.0054C46.4997 13.9365 46.6178 13.8259 46.6913 13.6736C46.7504 13.5212 46.795 13.3011 46.795 12.9829C46.795 12.6646 46.7504 12.4581 46.6913 12.3057C46.6178 12.1534 46.4997 12.0428 46.337 11.9739C46.1598 11.9186 45.9236 11.8769 45.5849 11.8769H44.464V14.1013H45.5704C45.9103 14.1013 46.161 14.0595 46.337 14.0042V14.0054ZM45.8211 10.316C47.8869 10.316 48.9186 11.1444 48.9186 12.8023C48.9186 13.3959 48.786 13.8519 48.4907 14.1972C48.1955 14.529 47.7821 14.7085 47.2518 14.7502C47.9158 14.7773 48.4461 14.985 48.815 15.3585C49.1693 15.7309 49.3609 16.2569 49.3609 16.9329C49.3609 18.7149 48.1955 19.6132 45.879 19.6132H42.25V10.316H45.8199H45.8211Z" fill="white"/>
                  <path d="M51.649 18.5639C50.8969 17.7626 50.5137 16.5742 50.5137 14.9727C50.5137 11.7823 52.0335 10.1797 55.0574 10.1797C55.824 10.1797 56.5182 10.2903 57.1521 10.4979L56.7243 12.1976C56.2964 11.9899 55.7806 11.8793 55.19 11.8793C54.5404 11.8793 54.0547 11.9764 53.7293 12.1423C53.3894 12.3217 53.1544 12.6253 53.0206 13.0677C52.888 13.4954 52.8145 14.1308 52.8145 14.9739C52.8145 15.8169 52.888 16.4376 53.0206 16.8665C53.1532 17.2942 53.3749 17.5989 53.7136 17.7648C54.0378 17.9443 54.5247 18.0278 55.1442 18.0278C55.8529 18.0278 56.4423 17.8901 56.9292 17.6272L57.3426 19.3821C56.6785 19.6304 55.912 19.741 55.0562 19.741C53.5364 19.741 52.4011 19.3539 51.649 18.5673V18.5639Z" fill="white"/>
                  <path d="M67.1375 18.5908C67.4472 18.4937 67.669 18.3143 67.8016 18.0795C67.9341 17.8312 68.0077 17.4712 68.0077 17.0017C68.0077 16.5322 67.9341 16.1587 67.8016 15.9104C67.669 15.6621 67.4328 15.4827 67.0929 15.3856C66.7687 15.2885 66.2817 15.2332 65.6623 15.2332H63.8472V18.7555H65.7502C66.3553 18.7555 66.8121 18.7002 67.1375 18.5896V18.5908ZM66.8277 14.2254C67.1085 14.1284 67.3002 13.9771 67.4183 13.7424C67.5364 13.5212 67.5955 13.1894 67.5955 12.7617C67.5955 12.3339 67.5364 12.0157 67.4328 11.7809C67.3146 11.5597 67.1375 11.3938 66.8723 11.3114C66.6072 11.2144 66.2384 11.1738 65.737 11.1738H63.8484V14.3642H65.6189C66.1504 14.3642 66.5481 14.3225 66.8289 14.2266L66.8277 14.2254ZM65.7804 10.316C67.6834 10.316 68.6272 11.1173 68.6272 12.7199C68.6272 13.3553 68.4946 13.8383 68.2138 14.1983C67.9486 14.5437 67.5497 14.7367 67.0483 14.7649C67.6979 14.792 68.1993 14.9861 68.5536 15.3732C68.908 15.7603 69.0851 16.3122 69.0851 17.0175C69.0851 18.7578 67.9787 19.6144 65.7804 19.6144H62.7998V10.3172H65.7804V10.316Z" fill="white"/>
                  <path d="M74.2022 11.4908L72.4027 16.505H76.0028L74.2034 11.4908H74.2022ZM72.093 17.3616L71.2819 19.6131H70.1309L73.7008 10.3159H74.7192L78.2891 19.6131H77.1237L76.3125 17.3616H72.093Z" fill="white"/>
                  <path d="M80.9327 10.3159L86.0225 17.6234V10.3159H87.0397V19.6131H86.1695L81.0653 12.3056V19.6131H80.0469V10.3159H80.9327Z" fill="white"/>
                  <path d="M90.7142 14.9995V19.6131H89.6367V10.3159H90.7142V14.7365L94.6674 10.3159H96.0257L91.7917 14.8607L96.4234 19.6131H94.9627L90.7142 14.9995Z" fill="white"/>
                  <path d="M12.7154 13.2734C12.8335 14.3919 12.8926 14.9866 11.9188 15.9538C10.9003 16.9627 8.34884 18.8136 5.73708 20.2221C4.63067 20.8157 3.14099 21.5346 2.01891 21.9217C1.17765 22.1982 0.484634 22.3224 0.130293 21.7558C-0.0914719 21.3834 0.0121789 21.0516 0.130293 20.7615C1.04507 18.4547 3.65563 14.1447 5.36707 11.3402C5.54424 11.0637 5.72141 10.7601 5.89858 10.4701C8.52601 6.22773 12.0067 1.03403 12.701 0.190981C12.7889 0.0803801 12.9818 -0.0573062 13.1433 0.0250798C13.2759 0.093923 13.2759 0.246281 13.2614 0.356881C13.2614 0.370424 13.2168 0.522782 13.2023 0.591625C12.067 4.87344 12.1996 9.074 12.7154 13.2734Z" fill="white"/>
                  <path d="M16.5502 14.5859C15.4438 14.1164 14.8689 13.8681 14.47 12.5962C14.0421 11.2701 13.6143 8.27262 13.6143 5.45457C13.6143 4.26618 13.6878 2.69181 13.8951 1.58694C14.0578 0.772107 14.2928 0.136719 15.0015 0.136719C15.4438 0.136719 15.6945 0.399677 15.9163 0.647964C17.5976 2.52704 20.2684 6.80886 22.0088 9.58516C22.1859 9.8752 22.3631 10.1652 22.5403 10.4688C25.152 14.7236 28.2194 20.1385 28.6472 21.1057C28.7063 21.2433 28.7509 21.4645 28.5882 21.5616C28.4411 21.6304 28.3074 21.5481 28.2194 21.4928C28.2049 21.4792 28.0868 21.3686 28.0277 21.3269C24.635 18.2605 20.6806 16.2573 16.5502 14.5859Z" fill="white"/>
                  <path d="M13.4098 17.0446C14.3981 16.381 14.9152 16.0356 16.3012 16.3404C17.7318 16.6722 20.7124 17.8188 23.3386 19.2272C24.4305 19.8209 25.8467 20.6639 26.7615 21.3817C27.44 21.92 27.8968 22.4313 27.5581 22.9978C27.3219 23.3703 26.9676 23.4402 26.6289 23.4955C24.0473 23.9097 18.7514 23.9379 15.3141 23.965H14.2221C8.98537 23.9515 2.44934 23.7303 1.32846 23.5926C1.16576 23.5655 0.945198 23.4955 0.959661 23.3161C0.959661 23.1637 1.09224 23.0949 1.19589 23.0531C1.22481 23.0396 1.37306 22.9978 1.44658 22.9843C5.97588 21.7553 9.79649 19.5579 13.411 17.0446H13.4098Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <transition name="fade">
      <div v-if="isVideoModalOpen" class="video-modal-backdrop" @click="isVideoModalOpen = false">
        <div class="video-modal-inner" @click.stop>
          <button class="modal-close-btn" @click="isVideoModalOpen = false">✕</button>
          <div class="video-player-frame">
            <img src="@/assets/images/hero-caex-balloon.png" alt="CAEx Full View" class="modal-full-img" />
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const isVideoModalOpen = ref(false)
const openVideoModal = () => {
  isVideoModalOpen.value = true
}

// Countdown Target: Sept 22, 2026
const targetDate = new Date('2026-09-22T09:00:00+05:00').getTime()

const days = ref(81)
const hours = ref(21)
const minutes = ref(15)

let timerInterval = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
}

const formatTime = (val) => String(val).padStart(2, '0')

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 0;
}

/* Centered Title matching Figma */
.hero-heading-block {
  text-align: center;
  margin-bottom: 36px;
}

.hero-title {
  font-family: 'Manrope', sans-serif;
  font-size: 64px;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #ffffff;
}

/* Hero Media Grid (Exact proportion matching screenshot) */
.hero-media-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
  align-items: stretch;
}

/* Left Video Card */
.video-showcase-card {
  position: relative;
  height: 485px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.video-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.video-showcase-card:hover .video-bg-img {
  transform: scale(1.03);
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,8,14,0.3) 100%);
  pointer-events: none;
}

/* Play Button with Frosted Glass Outer Ring & Green Disc */
.play-btn-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(0, 18, 24, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.play-btn-inner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #68FFB7;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(104, 255, 183, 0.7);
  padding-left: 3px;
  transition: transform 0.3s ease;
}

.video-showcase-card:hover .play-btn-circle {
  transform: translate(-50%, -50%) scale(1.08);
  border-color: rgba(104, 255, 183, 0.5);
}

.video-showcase-card:hover .play-btn-inner {
  transform: scale(1.05);
}

/* Right Info Card */
.hero-info-card {
  height: 485px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #121B2666;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.info-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 16px;
}

.screen-preview-wrapper {
  width: 100%;
  height: 190px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.screen-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-info-desc {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 15.5px;
  line-height: 1.45;
  color: #FFFFFF;
  margin: 0;
}

.hero-info-ctas {
  display: flex;
  gap: 12px;
}

.hero-main-btn {
  flex: 1;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #030A12;
  background: #68FFB7;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.hero-main-btn:hover {
  background: #83FFC1;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(104, 255, 183, 0.4);
}

.hero-agenda-btn {
  flex: 1;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #68FFB7;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(104, 255, 183, 0.4);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.hero-agenda-btn:hover {
  background: rgba(104, 255, 183, 0.08);
  border-color: rgba(104, 255, 183, 0.7);
  transform: translateY(-1px);
}

.countdown-3boxes-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.countdown-box {
  background: #0A121A;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  height: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.count-num {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
}

.count-unit {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #1BDB86;
}

/* ==========================================================================
   Key Stats / Ecosystem Valuation Bar (Exact 1:1 Figma & Reference)
   ========================================================================== */
.stats-valuation-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #121B2666;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 16px 24px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  max-width: 1280px;
  margin: 0 auto 32px auto;
  box-sizing: border-box;
}

.medal-wrapper {
  flex: 0 0 140px;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.medal-img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.5));
}

.stats-cards-row {
  flex: 1;
  display: grid;
  grid-template-columns: 395px 335px 255px;
  gap: 20px;
  align-items: center;
}

/* Neon Green Bordered Card matching Figma */
.stat-neon-card {
  position: relative;
  height: 112px;
  background: #121B2666;
  border: 1px solid #1BDB86;
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(27, 219, 134, 0.06);
  transition: all 0.2s ease;
  overflow: hidden;
  box-sizing: border-box;
}

.stat-neon-card:hover {
  box-shadow: 0 0 20px rgba(27, 219, 134, 0.2);
  transform: translateY(-1px);
}

/* Top Right 2026 Badge */
.badge-year-top {
  position: absolute;
  top: 0;
  right: 0;
  width: 72px;
  height: 24px;
  background: #68FFB7;
  color: #030A12;
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 13.5px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 11px;
  border-bottom-left-radius: 12px;
  letter-spacing: 0.3px;
  z-index: 2;
}

.badge-startupblink {
  width: 76px;
}

/* Stat numbers and labels common */
.stat-num {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
  font-size: 12.5px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.25;
  display: block;
}

/* Card 1: Dealroom */
.card-dealroom .stat-col-1 {
  position: absolute;
  left: 16px;
  top: 14px;
}

.card-dealroom .stat-col-1 .stat-label {
  margin-top: 6px;
}

.card-dealroom .stat-col-2 {
  position: absolute;
  left: 160px;
  top: 14px;
}

.card-dealroom .stat-col-2 .stat-label {
  margin-top: 6px;
}

.dealroom-logo-box {
  position: absolute;
  right: 14px;
  bottom: 12px;
  display: flex;
  align-items: center;
}

.dealroom-logo-img {
  width: 95px;
  height: 22px;
  object-fit: contain;
  display: block;
}

/* Card 2: StartupBlink */
.card-startupblink .stat-col-1 {
  position: absolute;
  left: 16px;
  top: 14px;
}

.card-startupblink .stat-col-1 .stat-label {
  margin-top: 6px;
  font-size: 12px;
}

.card-startupblink .stat-col-2 {
  position: absolute;
  left: 148px;
  top: 14px;
}

.card-startupblink .stat-col-2 .stat-label {
  margin-top: 6px;
  font-size: 12px;
}

.startupblink-logo-box {
  position: absolute;
  right: 14px;
  bottom: 12px;
  display: flex;
  align-items: center;
}

/* Card 3: Unicorns */
.card-unicorns .unicorn-left-group {
  position: absolute;
  left: 16px;
  top: 14px;
}

.unicorn-num-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.unicorn-head-svg {
  width: 28px;
  height: 29px;
  flex-shrink: 0;
}

.card-unicorns .stat-label {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.25;
}

.card-unicorns .brands-right-group {
  position: absolute;
  right: 14px;
  top: 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.brand-line {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

/* Modal */
.video-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.video-modal-inner {
  position: relative;
  width: 100%;
  max-width: 960px;
  background: #05080e;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(131, 255, 193, 0.3);
}

.modal-close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-full-img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1240px) {
  .stats-valuation-bar {
    padding: 16px 20px;
    gap: 20px;
  }
  .stats-cards-row {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }
  .stat-neon-card {
    width: 100%;
  }
}

@media (max-width: 1100px) {
  .hero-media-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 40px;
  }
  .stats-valuation-bar {
    flex-direction: column;
    padding: 20px 16px;
    gap: 16px;
  }
  .stats-cards-row {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
</style>
