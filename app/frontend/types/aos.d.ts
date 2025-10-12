// types/aos.d.ts
declare module 'aos' {
    const AOS: {
        init: (options?: Record<string, any>) => void
        refresh: () => void
    }
    export default AOS
}
