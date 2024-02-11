import { Select, Space } from "antd"
import { useState } from "react"
import { useCrypto } from "../context/crypto-context"

export default function AddAssetForm() {
    const { crypto } = useCrypto()
    const [coin, setCoin] = useState(null)

    const handleChange = (value) => {
        console.log(`Selected coin ID: ${value}`);
        // Дополнительная логика обработки изменения, если необходимо
    };

    if (!coin) {
        return (
            <Select
            style={{
                width: '100%'
            }}
                onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
                placeholder="Select coin"
                onChange={handleChange} // Использование handleChange
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                    <Space>
                        <img 
                            style={{ width: 20 }} 
                            src={option.data.icon} 
                            alt={option.data.label} 
                        /> {' '}
                        {option.data.label}
                    </Space>
                )}
            />
        )
    }

    return <form>FORM ASSET</form>
}
