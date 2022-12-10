APP_NAME=COASTALTRUSTCAPITALS
APP_ENV=local
APP_KEY=base64:Utz45i1T6QZoWA+Wb0tuDSM58/ZD1pRsRODeYxLER08=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=monegdpw_vest
DB_USERNAME=monegdpw_vest
DB_PASSWORD=monegdpw_vest

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=587 
MAIL_USERNAME=apikey
MAIL_PASSWORD=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
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@coastalvest.com
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"



///////////////////////////////////////////


RewriteEngine On
RewriteRule ^$ public/index.php [L]
RewriteRule ^((?!public/).*)$ public/$1 [L,NC]



<div class="featured_slick_gallery gray">
            <div class="featured_slick_gallery-slide">
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/nep12.webp') }}"
                    class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/nep12.webp') }}"
                        class="img-fluid mx-auto" alt="" style="width: 100%"  /></a>
            </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/nep13.webp') }}"
                    class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/nep13.webp') }}"
                        class="img-fluid mx-auto" alt="" style="width: 100%"  /></a>
            </div>
         
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/nep14.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/nep14.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%"  /></a>
                </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/nep15.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/nep15.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%"  /></a>
                </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/nep17.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/nep17.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%"  /></a>
                </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/nep14.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/nep14.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%"  /></a>
                </div>
            </div>
            
        </div>