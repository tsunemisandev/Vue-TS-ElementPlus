import { test, expect } from "@playwright/test";

["pgm1"].forEach((pgmId)=>{
    test(`画面${pgmId}の登録ボタンが非活性であること`, async ({ page }) => {
        await page.goto("/" + pgmId);
        const registerButton = await page.locator("#register");
  
        // Assert that the Register button is disabled initially
        await expect(registerButton).toBeDisabled();
      });
})


test(`バリデーションチェック`, async ({ page }) => {
    await page.goto("/pgm2");
    const registerButton = await page.locator('#register')
    
    await registerButton.click()
    const validationMessage = await page.locator('body')
    await expect(validationMessage).toContainText('Please input your name')
})

test(`グリッド`,async ({page})=>{
    await page.goto("/grid")
    await page.locator("#d02").getByRole('button', { name: 'Detail' }).nth(1).click();
    
})