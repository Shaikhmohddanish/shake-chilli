# Deployment Guide - Google Search Console Fixes

## Pre-Deployment Checklist

- [x] Build completed successfully (102 pages generated)
- [x] No TypeScript/ESLint errors
- [x] Middleware compiled (32.5 kB)
- [x] All fixes implemented
- [x] Documentation created

## Deployment Steps

### 1. Deploy to Production

```bash
# If using Vercel CLI
vercel --prod

# Or push to main branch (if auto-deployment is configured)
git add .
git commit -m "fix: resolve Google Search Console indexing issues"
git push origin main
```

### 2. Post-Deployment Verification (Immediate)

#### Test WWW Redirect
```bash
# Should redirect to https://shakechillicafe.com/
curl -I http://www.shakechillicafe.com/

# Expected response:
# HTTP/1.1 301 Moved Permanently
# Location: https://shakechillicafe.com/
```

#### Test Sitemap
Visit in browser:
- https://shakechillicafe.com/sitemap.xml
- Should show XML with ~105 URLs
- Check that all item and blog URLs are listed

#### Test Robots.txt
Visit in browser:
- https://shakechillicafe.com/robots.txt
- Should include: `Disallow: /_next/`
- Should include: `Sitemap: https://shakechillicafe.com/sitemap.xml`

#### Test 404 Page
Visit a non-existent URL:
- https://shakechillicafe.com/non-existent-page
- Should show custom 404 page with navigation

#### Test Middleware
Check these URLs redirect properly:
- http://www.shakechillicafe.com/menu → https://shakechillicafe.com/menu
- http://www.shakechillicafe.com/blog → https://shakechillicafe.com/blog

### 3. Google Search Console Actions (Within 1 Hour)

#### A. Submit Updated Sitemap
1. Go to: https://search.google.com/search-console
2. Navigate to: Sitemaps
3. Remove old sitemap (if exists)
4. Add new sitemap: `https://shakechillicafe.com/sitemap.xml`
5. Click "Submit"

#### B. Request Indexing for Problem URLs
Go to URL Inspection tool and request indexing for:

1. **Homepage (Redirect Issue)**
   ```
   https://shakechillicafe.com/
   ```

2. **Blog Post (Not Indexed)**
   ```
   https://shakechillicafe.com/blog/best-burger-near-me-mumbra-shilphata
   ```

3. **Menu Items (Not Indexed)**
   ```
   https://shakechillicafe.com/items/hazelnut-iced-latte
   https://shakechillicafe.com/items/corn-garlic-bread
   https://shakechillicafe.com/items/chicken-mexican-pizza
   ```

For each URL:
1. Paste URL in URL Inspection tool
2. Wait for inspection to complete
3. Click "Request Indexing"
4. Wait ~2 minutes between requests

### 4. Monitor (First 24 Hours)

Check every 6-8 hours:

#### Google Search Console
- Go to Coverage report
- Check "Valid" count (should increase)
- Check "Error" count (should decrease)
- Review any new issues

#### Analytics
- Monitor organic traffic
- Check for any 404 errors
- Verify redirect tracking

#### Server Logs (if accessible)
- Check for Googlebot activity
- Verify successful crawls
- Check response codes (should be 200 for pages, 301 for www)

### 5. Weekly Monitoring (Week 1-4)

#### Week 1 Actions
- [ ] Check indexed page count (target: 60-70 pages)
- [ ] Request indexing for 10-15 more unindexed pages
- [ ] Review Coverage report for new errors
- [ ] Monitor Core Web Vitals

#### Week 2 Actions
- [ ] Check indexed page count (target: 80-90 pages)
- [ ] Request indexing for remaining unindexed pages
- [ ] Review search performance (impressions/clicks)
- [ ] Check mobile usability

#### Week 3 Actions
- [ ] Check indexed page count (target: 95-105 pages)
- [ ] Review rich results status
- [ ] Analyze search queries
- [ ] Monitor rankings for key terms

#### Week 4 Actions
- [ ] Final indexed page count check
- [ ] Review overall coverage health
- [ ] Analyze month-over-month growth
- [ ] Document lessons learned

## Troubleshooting

### If WWW Redirect Doesn't Work
1. Check middleware.ts is deployed
2. Verify middleware.ts is in root directory (not /app)
3. Check Vercel/hosting provider middleware support
4. Review deployment logs for middleware errors

### If Sitemap Not Accessible
1. Check /app/sitemap.ts is deployed
2. Verify build included sitemap generation
3. Check server response code (should be 200)
4. Verify XML format is valid

### If Pages Still Not Indexed After 2 Weeks
1. Use URL Inspection tool to check specific pages
2. Look for "Discovered - currently not indexed"
3. Check for:
   - Noindex tags (should not be present)
   - Canonical issues
   - Duplicate content
   - Low quality content signals
4. Add more internal links to unindexed pages
5. Request indexing again

### If New Errors Appear
1. Document the error type
2. Check which pages are affected
3. Review recent code changes
4. Use URL Inspection tool for details
5. Fix and request re-indexing

## Success Metrics

### Immediate Success (Week 1)
- [x] Zero deployment errors
- [ ] WWW redirect working (301 status)
- [ ] Sitemap accessible and valid
- [ ] 404 page functional
- [ ] No new errors in GSC

### Short-term Success (Week 2-4)
- [ ] Indexed pages increase to 80+
- [ ] "Crawled - not indexed" issues resolved
- [ ] No redirect validation errors
- [ ] Search impressions stable or increasing

### Long-term Success (Month 2-3)
- [ ] 95%+ of pages indexed (100+ pages)
- [ ] Organic traffic increase by 20%+
- [ ] Zero coverage errors
- [ ] Improved keyword rankings

## Rollback Plan

If critical issues occur:

### Option 1: Quick Fix
1. Revert problematic commit
2. Redeploy previous version
3. Investigate issue locally
4. Deploy fix

### Option 2: Disable Middleware
```typescript
// In middleware.ts, temporarily disable:
export function middleware(request: NextRequest) {
  return NextResponse.next() // Bypass middleware
}
```

### Option 3: Restore Previous Config
Revert to previous next.config.mjs with redirects if middleware causes issues.

## Support Resources

- **GSC Fixes Documentation:** GSC_FIXES.md
- **SEO Checklist:** SEO_CHECKLIST.md
- **Google Search Console:** https://search.google.com/search-console
- **Next.js Middleware Docs:** https://nextjs.org/docs/app/building-your-application/routing/middleware

## Contact Points

- **Technical Issues:** Check error logs in hosting dashboard
- **GSC Issues:** Review coverage report details
- **SEO Questions:** Refer to SEO_CHECKLIST.md
- **Urgent Issues:** Check rollback plan above

---

**Deployment Date:** [To be filled]
**Deployed By:** [To be filled]
**Status:** Ready for Deployment ✅
**Estimated Completion:** 2-3 weeks for full indexing
