import forge from "node-forge";
const key = "BUFFETS@rl1nd025";

export const encrypt = (data) => {
    const jsonString = JSON.stringify(data);
    const cipher = forge.cipher.createCipher("AES-GCM", key);
    const iv = forge.random.getBytesSync(12); 
    cipher.start({ iv });
    cipher.update(forge.util.createBuffer(jsonString, "utf8"));
    cipher.finish();

    const encryptedData = forge.util.encode64(iv + cipher.output.getBytes() + cipher.mode.tag.getBytes());
    const encodedDataPost = encodeURIComponent(encryptedData);

    return encodedDataPost;
};

export const decrypt = (data) => {
    const decodedEncryptedData = forge.util.decode64(decodeURIComponent(data));
    const iv = decodedEncryptedData.slice(0, 12); 
    const tag = decodedEncryptedData.slice(decodedEncryptedData.length - 16, decodedEncryptedData.length); 
    const encryptedBytes = decodedEncryptedData.slice(12, decodedEncryptedData.length - 16);
    const encryptedBuffer = forge.util.createBuffer(encryptedBytes, "raw");

    const decipher = forge.cipher.createDecipher("AES-GCM", key);

    decipher.start({ iv: iv, tag: tag });

    decipher.update(encryptedBuffer);

    if (!decipher.finish()) {
        throw new Error();
    }

    const decryptedString = decipher.output.toString("utf8");

    return JSON.parse(decryptedString);
}