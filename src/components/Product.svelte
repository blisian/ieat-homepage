<script>
	import SectionWrapper from "./SectionWrapper.svelte";
    import report from '$lib/assets/report.png' 
    import camera from '$lib/assets/food.png'
    import routine from '$lib/assets/repeat.png'
</script>
<SectionWrapper>
    <div class="max-w-[800px] mx-auto w-full
    items-center justify-between py-6 pt-16">
        <div class=" justify-center w-full flex text-2xl">
            <h1 class="text-logo-green">I-EAT</h1>
            &nbsp;은 어떻게 다른가요?
        </div>
        <div class="grid grid-cols-3 place-items-center pt-10">
            <div class="flex flex-col justify-center items-center">
                <img alt="report" src="{report}" class="size-2/5 pb-5"/>
                <h1 class="font-bold text-lg">영양 관리 및 사용자 맞춤형 리포트</h1>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img alt="report" src="{camera}" class="size-2/5 pb-5"/>
                <h1 class="font-bold text-lg">이미지 인식 기능</h1>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img alt="report" src="{routine}" class="size-2/5 pb-5"/>
                <h1 class="font-bold text-lg">요일별 루틴 생성 및 목표 공유</h1>
            </div>
        </div>
    </div>
</SectionWrapper>