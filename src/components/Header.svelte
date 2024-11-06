<script>
    import logo from '$lib/assets/logo.png';
    import phone from '$lib/assets/phone.png';
    import appstore from '$lib/assets/btn_appstore.webp'
    import google from '$lib/assets/btn_googleplay.webp'
</script>

<header class="flex flex-col relative z-20 bg-logo-green/10">
    <div class="max-w-[800px] mx-auto w-full flex
    items-center justify-between p-4 py-6 pt-20">
        <div>
            <img alt="logo" src="{logo}" class=" size-1/4"/>
            <h1 class="pt-8 text-3xl font-bold">스마트 식단 관리 플랫폼</h1>
            <h1 class="pt-4">소통과 공유의 가치</h1>
            <div class="flex items-center pt-4">
                <img alt="appstore" src="{appstore}" class="size-1/4 pr-2"/>
                <img alt="appstore" src="{google}" class="size-1/4"/>
            </div>
        </div>
        <img alt="phone" src="{phone}" class="size-1/4"/>
    </div>
</header>