

export default function formatSku(_data: string): string {
    return _data.toUpperCase().replace(/\s+/g, "-");
}