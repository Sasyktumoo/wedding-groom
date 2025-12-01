# Creating Two Versions of the Wedding Website

## ✨ Smart Approach: One Codebase, Two Deployments

Instead of maintaining two separate copies, you have **one codebase** with a simple configuration file that controls which parents' names appear in the footer.

---

## 📁 How It Works

### Configuration File: `config/family.config.ts`

This file controls which family is being represented:

```typescript
export const FAMILY_SIDE: 'groom' | 'bride' = 'groom'; // ← Change this!
```

**Two settings:**
- `'groom'` - Shows groom's parents names in footer
- `'bride'` - Shows bride's parents names in footer

---

## 🎯 Step-by-Step: Creating Two Versions

### Step 1: Fill in Parent Names

Edit `config/family.config.ts`:

```typescript
// Groom's Parents
export const GROOM_PARENTS = {
  kgz: {
    fatherName: "Кенжебек",
    motherName: "Жылдыз",
  },
  ru: {
    fatherName: "Кенжебек",
    motherName: "Жылдыз",
  }
};

// Bride's Parents
export const BRIDE_PARENTS = {
  kgz: {
    fatherName: "Асан",     // ← Replace with actual names
    motherName: "Гүлнара",  // ← Replace with actual names
  },
  ru: {
    fatherName: "Асан",     // ← Replace with actual names
    motherName: "Гүлнара",  // ← Replace with actual names
  }
};
```

### Step 2: Deploy Version 1 (Groom's Family)

1. **Make sure config is set to groom:**
   ```typescript
   export const FAMILY_SIDE: 'groom' | 'bride' = 'groom';
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Version 1 - Groom's family"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/wedding-groom.git
   git push -u origin main
   ```

3. **Deploy to Vercel or GitHub Pages** (see DEPLOYMENT_GUIDE.md)

### Step 3: Deploy Version 2 (Bride's Family)

1. **Change the configuration:**
   
   Open `config/family.config.ts` and change:
   ```typescript
   export const FAMILY_SIDE: 'groom' | 'bride' = 'bride'; // ← Changed!
   ```

2. **Push to a different repository:**
   ```bash
   git remote remove origin  # Remove old remote
   git remote add origin https://github.com/YOUR-USERNAME/wedding-bride.git
   git add config/family.config.ts
   git commit -m "Version 2 - Bride's family"
   git push -u origin main
   ```

3. **Deploy to Vercel or GitHub Pages**

---

## 🚀 Quick Deployment: Vercel Method (RECOMMENDED)

**Why Vercel?**
- ✅ Easiest for Next.js
- ✅ 2 minutes per deployment
- ✅ Free custom domains
- ✅ Automatic HTTPS

### Deploy Both Versions:

1. **Go to https://vercel.com and sign up**

2. **Import First Repository (Groom):**
   - Click "New Project"
   - Import `wedding-groom` repository
   - Click Deploy
   - Get URL: `wedding-groom.vercel.app`

3. **Import Second Repository (Bride):**
   - Click "New Project" again
   - Import `wedding-bride` repository
   - Click Deploy
   - Get URL: `wedding-bride.vercel.app`

**Done!** You have 2 live websites with different parent names.

---

## 📊 Comparison of Approaches

| Approach | Maintenance | Changes Needed | Recommended? |
|----------|-------------|----------------|--------------|
| **Two Separate Copies** | Hard - update both | Fix bugs twice | ❌ No |
| **One Code + Config** | Easy - update once | Change 1 line | ✅ **Yes!** |

---

## 🔄 Making Updates to Both Sites

### Scenario: Fix a bug or change content

**Old way (two copies):**
1. Fix in version 1
2. Copy fix to version 2
3. Deploy both
4. Easy to miss things!

**New way (one codebase):**
1. Fix once in your code
2. Push to both repositories:
   ```bash
   # Push to groom's repo
   git remote set-url origin https://github.com/YOUR-USERNAME/wedding-groom.git
   git push
   
   # Push to bride's repo  
   git remote set-url origin https://github.com/YOUR-USERNAME/wedding-bride.git
   git push
   ```
3. Both sites auto-update!

Or even simpler with Vercel - link both deployments to the same repo but different branches!

---

## 🎨 What Changes Between Versions?

**Only the footer shows different names:**

### Groom's Version Footer:
```
С уважением, той ээси:
Кенжебек & Жылдыз
```

### Bride's Version Footer:
```
С уважением, той ээси:
Асан & Гүлнара
```

**Everything else stays the same:**
- ✅ Same couple names (Мырзабек & Айгерим)
- ✅ Same event details
- ✅ Same photos
- ✅ Same design
- ✅ Same countdown
- ✅ Same music

---

## 🎯 Alternative: Super Easy GitHub Branches Approach

**Even simpler workflow:**

1. Create one repository with two branches:
   ```bash
   git checkout -b groom-version
   # Set FAMILY_SIDE = 'groom'
   git commit -am "Groom version"
   git push -u origin groom-version
   
   git checkout -b bride-version
   # Set FAMILY_SIDE = 'bride'
   git commit -am "Bride version"
   git push -u origin bride-version
   ```

2. On Vercel:
   - Import repository
   - Deploy `groom-version` branch → Site 1
   - Import same repository again
   - Deploy `bride-version` branch → Site 2

3. To update both:
   - Make changes in `main` branch
   - Merge to both branches:
   ```bash
   git checkout groom-version
   git merge main
   git push
   
   git checkout bride-version
   git merge main
   git push
   ```
   - Both sites auto-update!

---

## 📝 Summary

**What You Have Now:**
- ✅ One codebase that can show either family's names
- ✅ Simple config file to switch between versions
- ✅ Easy to deploy twice
- ✅ Easy to maintain

**Next Steps:**
1. Fill in bride's parent names in `config/family.config.ts`
2. Follow deployment guide to create 2 sites
3. Share each URL with respective families

**URLs You'll Get:**
- Groom's family: `https://wedding-groom.vercel.app` (or custom domain)
- Bride's family: `https://wedding-bride.vercel.app` (or custom domain)

---

## 🆘 Questions?

**Q: Can I have different content besides parent names?**
A: Yes! Just add more fields to the config file.

**Q: Do I need to maintain two codebases?**
A: No! That's the beauty - one codebase, change one line, deploy twice.

**Q: What if I want different photos too?**
A: Add a photo configuration to `family.config.ts` or use different branches.

**Q: How do I update both sites?**
A: Make your changes once, push to both repos (or both branches).

---

Good luck with your wedding! 🎉💒

